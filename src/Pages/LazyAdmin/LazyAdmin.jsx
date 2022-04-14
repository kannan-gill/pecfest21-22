import React, { useState, useEffect } from "react";
import { getList, getListFiltered } from "services";
import SimpleInput from "Components/Utilities/SimpleInput";
import exportFromJSON from "export-from-json";
import "./lazyAdmin.css";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import StarsBg from "Components/StarsBg";

function LazyAdmin() {
  const [competitionsData, setCompetitionsData] = useState([]);
  const [event, setEvent] = useState("");
  const [chosenComp, setChosenComp] = useState({});
  const [finalUserData, setFinalUserData] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [pass, setPass] = useState("");
  const [dataBackup, setDataBackup] = useState([]);

  const columns = [
    chosenComp["isTeamEvent"] ? "Team No." : "S.No",
    "Name",
    "Gender",
    "College",
    "Degree",
    "Graduation year",
    "Phone Number",
    "Email",
    "Pecfest ID",
    "Date of birth",
    "Prelims Link",
  ];

  const fields = [
    "name",
    "gender",
    "college",
    "degree",
    "year",
    "phone",
    "email",
    "pecfestId",
    "dob",
    "prelimsLink",
  ];

  useEffect(() => {
    getList("events").then((data) => {
      setCompetitionsData(data);
    });
  }, []);

  function handleChange(name, value) {
    setEvent(value);
  }

  function ExportToExcel() {
    var data = finalUserData;
    var fileName = chosenComp.name + Date.now();
    var exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, extension: "xls", exportType });
  }


  const handleEventSelection = (comp) => {
    setFinalUserData([]);
    setChosenComp(comp);
    let registeredUserObjects = {};

    if (comp?.registeredUsers) {
      comp["registeredUsers"].forEach((user) => {
        registeredUserObjects[`${user.userId}`] = user.prelimLink;
      });

      if (comp?.isTeamEvent) {
        let userTeamId = {};
        getList("event-teams").then((data) => {
          const participatingTeams = data.filter((team) =>
            Object.keys(registeredUserObjects).includes(team.id)
          );
          let members = [];
          participatingTeams.forEach((team, index) => {
            team.teamMembers.forEach((member) => {
              members.push(member);
              registeredUserObjects[index] = registeredUserObjects[team.id];
              delete registeredUserObjects[team.id];
              userTeamId[member] = index+1;
            });
          });
          let finalUsers = [];
          getListFiltered("users", "pecfestId", members).then((data) => {
            data.forEach((user, index) => {
              const userData = {
                ...user,
                teamId: userTeamId[user.pecfestId],
                prelimsLink: registeredUserObjects[userTeamId[user.pecfestId]],
              };
              const { registeredEvents, emailVerified, ...finalUserData } =
                userData;
              finalUsers.push(finalUserData);
            });
            setFinalUserData(finalUsers.sort((a, b) => a.teamId - b.teamId));
          });
        });
      } else {
        getListFiltered("users", "id", Object.keys(registeredUserObjects)).then(
          (data) => {
            data.forEach((user, index) => {
              const userData = {
                ...user,
                prelimsLink: registeredUserObjects[user.id],
              };
              const { registeredEvents, emailVerified, ...finalUserData } =
                userData;
              setFinalUserData((prev) => [...prev, finalUserData]);
            });
          }
        );
      }
    } else {
      setFinalUserData([]);
    }
  };

  function dataBackupFunction(){
    getList('stats').then(data=>{
      setDataBackup(data);
    });
    console.log(dataBackup);

    var data = dataBackup;
    var fileName = 'dataBackup' + Date.now();
    var exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, extension: "xls", exportType });


    // fileSystem.writeFile("./newClient.json", eventsbackup, err=>{
    //   if(err){
    //     console.log("Error writing file" ,err)
    //   } else {
    //     console.log('JSON data is written to the file successfully')
    //   }
    //  })
   
  };

  const verifyPassword = () => {
    if (pass === "g9bcDvrN?UQf$3b+") {
      setShowModal(false);
    } else {
      setPass("");
      setShowModal(true);
    }
  };

  return (
    <div className="vh-100 vw-100 d-flex flex-column">
      <StarsBg />

      <Modal show={showModal} centered>
        <Modal.Header>
          <Modal.Title>Verify User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          Enter password to authenticate:<br></br>
          <input
            className="mt-3"
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="w-25" onClick={verifyPassword}>
            VERIFY
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className={`main_container h-100 d-flex flex-column overflow-hidden ${
          showModal && "d-none"
        }`}
      >
        <div className={`d-flex flex-column overflow-auto px-5 flex-grow-1 `}>
          <form>
            <div className="d-flex jusitfy-content-center">
              <h4 className="text-white mb-3 m-auto">
                Please select Name of event
              </h4>
            </div>
            <div className="d-flex justify-content-center w-100">
              <SimpleInput
                type="text"
                icon="search"
                placeholder="Name of competition"
                name="Name"
                val={event}
                changeFunc={handleChange}
              />
            </div>
          </form>

          <div className="d-flex flex-wrap w-100 justify-content-center">
            {competitionsData
              .filter((data) =>
                data.name.toLowerCase().includes(event.toLowerCase())
              )
              .map((comp) => {
                return (
                  <p
                    key={comp.name}
                    className={`text-black m-2 bg-warning p-2 rounded cursor-pointer ${
                      chosenComp.name === comp.name && "bg-danger text-white"
                    }`}
                    onClick={(e) => {
                      handleEventSelection(comp);
                    }}
                  >
                    {comp.name}
                  </p>
                );
              })}
          </div>
          <div>
            <div className="d-flex justify-content-end mt-5 mb-2">
              <button
                className="btn btn-danger my-3"
                disabled={finalUserData.length === 0}
                onClick={ExportToExcel}
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Export To Excel
              </button>
              <button
                className="btn btn-danger my-3"
                disabled={finalUserData.length === 0}
                onClick={dataBackupFunction}
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Data Backup
              </button>
            </div>
            <table className="customTable w-100 text-white font-weight-bold position-relative mb-4 pe-3">
              <tr>
                {columns.map((column) => (
                  <th className="text-center px-3 py-1">{column}</th>
                ))}
              </tr>
              {finalUserData.length === 0 ? (
                <div
                  className={
                    "text-white text-center noUser text-uppercase fw-bold pb-5"
                  }
                >
                  No users registered for this event yet!
                </div>
              ) : (
                finalUserData.map((participant, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center px-3 py-1">
                        {chosenComp["isTeamEvent"]
                          ? participant.teamId
                          : index + 1}
                      </td>
                      {fields.map((field) => (
                        <td className="text-center px-3 py-1">
                          {participant[field] ? participant[field] : "-"}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LazyAdmin;
