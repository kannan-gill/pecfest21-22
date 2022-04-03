import React, { useState } from "react";
// import styles from "./RegisterLogin.module.css";
import { Container, Row, Col } from "react-bootstrap";
import LoginFlipCard from "../../Components/LoginFlipCard/LoginFlipCard";
import BackButton from "../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import SimpleInput from "../../Components/Utilities/SimpleInput";
import SelectInput from "../../Components/Utilities/SelectInput";
import Button from "../../Components/Utilities/Button";

// this will have admin authorisation and 2 options for admin, 1 to enter event (event id, name, organising society or people, description)
// and this will have option to fetch all people who registered for a particular event.

// Store cultural and technical comps in separate buckets

// type of competition, cutltural technical
// code of competition
// single event or team event.
// if team event how many max members
// name of competition
// google drive link or upload button
// description of the competition
// organising club or team
// contact person number name

function Admin() {
  const [competition, setCompetition] = useState({
    name: "",
    code: "",
    description: "",
    maxmembers: "",
    drivelink: "",
    CompCategory: "",
    TeamEvent: "",
    isOnline: "",
  });

  const [CompRegistrations, setCompRegistrations] = useState("");

  const changeHandler = (name, value) => {
    setCompetition((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  function handleSubmit(e) {}

  function handleCodeSubmit(e) {}

  function getListHandler(e) {
    setCompRegistrations(e.target.value);
  }

  return (
    <div
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/images%2Flogin_register_bg.jpg?alt=media&token=db5d9a10-5c7d-40a4-a571-e27910915c8f')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
      className={`vw-100 vh-auto`}
    >
      <Container fluid className="p-0 m-0 h-100">
        <div>
          <div
            className="text-center text-uppercase fs-1 my-3 text-white"
            style={{ fontFamily: "'Audiowide', serif", fontWeight: 700 }}
          >
            ADMIN
          </div>
          <Row>
            <Col sm={12} md={6}>
              <form
                onSubmit={handleSubmit}
                className="h-auto mh-100 mt-3 overflow-auto"
              >
                <div className={`w-100 d-flex flex-column align-items-center`}>
                  <SimpleInput
                    type="text"
                    icon="at"
                    placeholder="Name of competition"
                    name="name"
                    val={competition.name}
                    changeFunc={changeHandler}
                  />
                  <SimpleInput
                    type="text"
                    name="code"
                    icon="key"
                    placeholder="Code of Competition"
                    val={competition.code}
                    changeFunc={changeHandler}
                  />
                  <SimpleInput
                    type="text"
                    name="description"
                    icon="key"
                    placeholder="Description"
                    val={competition.description}
                    changeFunc={changeHandler}
                  />
                  <SelectInput
                    value={competition.CompCategory}
                    changeFunc={changeHandler}
                    name="CompCategory"
                    icon="key"
                    label="Competition Category"
                    val={competition.CompCategory}
                    disabledOption="Competition Category"
                    options={["Technical", "Cultural", "Other"]}
                    isValid="true"
                  />
                  <SelectInput
                    value={competition.isOnline}
                    changeFunc={changeHandler}
                    name="isOnline"
                    icon="key"
                    label="Competition Category"
                    val={competition.isOnline}
                    disabledOption="Competition Mode"
                    options={["Online", "Offline"]}
                    isValid="true"
                  />
                  <SelectInput
                    value={competition.TeamEvent}
                    changeFunc={changeHandler}
                    name="TeamEvent"
                    icon="key"
                    label="Competition Type"
                    val={competition.TeamEvent}
                    disabledOption="Competition Type"
                    options={["Individual", "Team"]}
                    isValid="true"
                  />
                  <SimpleInput
                    type="text"
                    name="members"
                    icon="key"
                    placeholder="Maximum members"
                    val={competition.maxmembers}
                    changeFunc={changeHandler}
                  />
                  <SimpleInput
                    type="text"
                    name="drivelink"
                    icon="key"
                    placeholder="Drive Link"
                    val={competition.drivelink}
                    changeFunc={changeHandler}
                  />
                </div>

                <Button
                  className="mx-3"
                  type="button"
                  onClickFunc={handleSubmit}
                >
                  ADD
                </Button>
              </form>
            </Col>

            <Col sm={12} md={6}>
              <form
                onSubmit={handleCodeSubmit}
                className="h-auto mh-100 mt-3 overflow-auto"
              >
                <div className={`w-100 d-flex flex-column align-items-center`}>
                  <div className="text-sm text-center text-uppercase fs-4 my-3 text-white">
                    Enter Code of competition for registration list
                  </div>
                  <SimpleInput
                    type="text"
                    icon="at"
                    placeholder="Code of competition"
                    name="name"
                    val={CompRegistrations}
                    changeFunc={getListHandler}
                  />
                </div>

                <Button
                  className="mb-3"
                  type="button"
                  onClickFunc={handleCodeSubmit}
                  style={{ margin: "20px" }}
                >
                  GET
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>

      {/* <form>

      
        <button
          type="button"
          className="btn btn-primary m-3 my-button"
          onClick={(e) => appendCompetition(e)}
        >
          Register
        </button>
      </form> */}
    </div>
  );
}

export default Admin;
