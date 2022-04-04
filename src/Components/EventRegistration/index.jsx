import { faCirclePlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { createDoc, getDocById, getUsersInPECIdArray, updateDoc } from "services";

const EventRegistration = ({
  loader,
  prelimLink,
  setPrelimLink,
  event,
  onRegister,
  userDets,
  registeredTeamId = null,
  alreadyRegistered = false,
}) => {
  const addTeamMemberSlot = () => {
    if (teamMemberDetails.length < event.maxMembers) {
      setErrorDetails((prevDets) => {
        return [...prevDets, ""];
      });
      setTeamMemberDetails((prevDets) => {
        return [...prevDets, ""];
      });
    }
  };
  const removeSlot = (ind) => {
    if (teamMemberDetails.length > event.minMembers) {
      setErrorDetails((prevDets) => {
        const newArr = [...prevDets];
        newArr.splice(ind, 1);
        return newArr;
      });
      setTeamMemberDetails((prevDets) => {
        const newArr = [...prevDets];
        newArr.splice(ind, 1);
        return newArr;
      });
    }
  };
  const [teamMemberDetails, setTeamMemberDetails] = useState(
    Array.from({ length: event.minMembers }).fill("")
  );
  const [errorDetails, setErrorDetails] = useState(
    Array.from({ length: event.minMembers }).fill("")
  );
 
  useEffect(() => {
    if(!alreadyRegistered){
      setTeamMemberDetails((prevDets) => {
        const newArr = [...prevDets];
        newArr[0] = userDets?.pecfestId;
        return newArr;
      });
    }
    else{
      (async ()=>{
        const teamData = await getDocById('event-teams', registeredTeamId);
        setTeamMemberDetails(teamData?.teamMembers);
      })();
    }
   
  }, []);
  const validateUnique = () => {
    const teamSet = new Set();
    let finalValid = true;
    teamMemberDetails.forEach((teamMember, ind) => {
      if (!teamMember) {
        return;
      }
      if (teamSet.has(teamMember)) {
        finalValid = false;
        setErrorDetails((prevDets) => {
          const newArr = [...prevDets];
          newArr[ind] = "Team members must be unique";
          return newArr;
        });
      } else {
        teamSet.add(teamMember);
      }
    });
    return finalValid;
  };
  const validateForm = async () => {
    let errorOccured = false;
    setErrorDetails(Array.from({ length: teamMemberDetails.length }).fill(""));
    if (!validateUnique()) {
      errorOccured = true;
    }
    const usersData = await getUsersInPECIdArray(teamMemberDetails);
    if (!validatePecId(usersData)) {
      errorOccured = true;
    }
    //   //
    if (!errorOccured) {
      if (event.isTeamEvent) {
        // generate team id
        const teamDets = await createDoc("event-teams", {
          teamMembers: teamMemberDetails,
        });
        // save this in every user and inside event
        usersData.forEach((user) => {
          const key = "registeredEvents";
          let eventsList = user[key];

          if (!eventsList) {
            eventsList = [];
          }
          try {
            const payloadData = {
              ...user,
              [key]: [
                ...eventsList,
                { eventId: event.id, prelimLink, teamId: teamDets.id },
              ],
            };
            updateDoc("users", user.id, payloadData);
          } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
          }
        });
        if (!alreadyRegistered) {
          onRegister(teamDets.id);
        }
      } else if (!alreadyRegistered) {
        onRegister();
      }

      
    }
  };
  const validatePecId = (usersData) => {
    let finalValid = true;
    teamMemberDetails.forEach((teamMember, ind) => {
      if (!teamMember) {
        finalValid = false;
        setErrorDetails((prevDets) => {
          const newArr = [...prevDets];
          newArr[ind] = "field cannot be empty";
          return newArr;
        });
      }
    });
    const usersDataSet = new Set();

    usersData.forEach((user) => {
      // @ts-ignore
      usersDataSet.add(user.pecfestId);
    });
    const validDetails = teamMemberDetails.map((teamMember) => {
      let response = "";
      if (teamMember && !usersDataSet.has(teamMember)) {
        response = "ID not valid";
      } else if (teamMember) {
        usersData.forEach((user) => {
          // @ts-ignore
          if (user.pecfestId === teamMember) {
            // @ts-ignore
            user?.registeredEvents?.some((eventMapped) => {
              if (eventMapped.eventId === event.id) {
                response = "User is already registered for the event";
                return true;
              }
              return false;
            });
          }
        });
      }
      return response;
    });
    setErrorDetails((prevDets) => {
      const newArr = [...prevDets];
      validDetails.map((det, ind) => {
        if (det) {
          finalValid = false;
          newArr[ind] = det;
        }
      });
      return newArr;
    });
    return finalValid;
  };
  return (
    <>
      <h1 className=" mx-auto mb-4 mt-4">Registration</h1>
      <Form className="h-100">
        {event.isTeamEvent && (
          <>
            {teamMemberDetails.map((teamMember, ind) => (
              <Form.Group
                key={`member-${ind}`}
                className="mb-0 mt-2"
                controlId="formBasicEmail"
              >
                <Form.Label>
                  {ind === 0 ? "Your id" : "Team member id"}
                </Form.Label>
                <div className="position-relative d-flex flex-row">
                  <p className="position-absolute end-100 me-2 text-muted top-50 translate-middle-y zi-top">
                    #{ind + 1}
                  </p>
                  <Form.Control
                    value={teamMember}
                    disabled={ind === 0 || alreadyRegistered}
                    onChange={(e) => {
                      setTeamMemberDetails((prevDets) => {
                        const newArr = [...prevDets];
                        newArr[ind] = e.target.value;
                        return newArr;
                      });
                    }}
                    type="text"
                    className="bg-transparent border text-white pe-5"
                    placeholder="Enter pecfest id"
                  />
                  {!alreadyRegistered &&
                    ind !== 0 &&
                    teamMemberDetails.length > event.minMembers && (
                      <button
                        type="button"
                        className="position-absolute end-0 top-50 translate-middle-y me-2"
                        onClick={() => {
                          removeSlot(ind);
                        }}
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faXmark}
                          color="yellow"
                          className="fa-fw cursor-pointer ms-2"
                        />
                      </button>
                    )}
                </div>
                <Form.Label className="text-danger">
                  {errorDetails[ind]}
                </Form.Label>
              </Form.Group>
            ))}
            {!alreadyRegistered && teamMemberDetails.length < event.maxMembers && (
              <div className="d-flex flex-row justify-content-center mt-0">
                <button
                  type="button"
                  onClick={() => {
                    addTeamMemberSlot();
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="2x"
                    className="fa-fw cursor-pointer text-warning"
                  />
                </button>
              </div>
            )}
          </>
        )}

        {event?.hasPrelimEntry && (
          <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
            <Form.Label className="text-warning">Add public drive link for online prelims</Form.Label>
            <div className="position-relative d-flex flex-row">
              <Form.Control
                disabled={alreadyRegistered}
                value={prelimLink}
                onChange={(e) => setPrelimLink(e.target.value)}
                type="text"
                className="bg-transparent border text-white"
                placeholder="Enter drive link"
              />
            </div>
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
        )}

        {!alreadyRegistered && (
          <div className="d-flex flex-row justify-content-center mt-4 mb-0">
            <Button
              disabled={loader || (event.hasPrelimEntry && prelimLink === "")}
              variant="warning"
              onClick={() => {
                validateForm();
              }}
            >
              {loader && (
                <Spinner
                  animation="border"
                  className="me-2"
                  variant="dark"
                  size="sm"
                />
              )}
              Register
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};

export default EventRegistration;
