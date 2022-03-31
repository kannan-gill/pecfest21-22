import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";

const index = () => {
  return (
    <>
      <h1 className=" mx-auto mb-4 mt-4">Registration</h1>
      <Form className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team member id</Form.Label>
          <div className="position-relative d-flex flex-row">
            <p className="position-absolute end-100 me-2 text-muted top-50 translate-middle-y zi-top">
              #1
            </p>
            <Form.Control
              type="text"
              className="bg-transparent border text-white"
              placeholder="Enter pecfest id"
            />
          </div>

          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team member id</Form.Label>
          <div className="position-relative d-flex flex-row">
            <p className="position-absolute end-100 me-2 top-50 text-muted translate-middle-y zi-top">
              #2
            </p>
            <Form.Control
              type="text"
              className="bg-transparent border text-white"
              placeholder="Enter pecfest id"
            />
          </div>

          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <div className="d-flex flex-row justify-content-center mt-4">
          <button type="button" onClick={() => {}}>
            {" "}
            <FontAwesomeIcon
              icon={faCirclePlus}
              color="yellow"
              size="2x"
              className="fa-fw cursor-pointer"
            />
          </button>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-warning">Prelims drive link</Form.Label>
          <div className="position-relative d-flex flex-row">
            <p className="position-absolute end-100 me-2 top-50 text-muted translate-middle-y zi-top">
              #2
            </p>
            <Form.Control
              type="text"
              className="bg-transparent border text-white"
              placeholder="Enter drive link"
            />
          </div>
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          <div className="d-flex flex-row justify-content-center mt-4 mb-0">
            <Button variant="warning" onClick={() => {}}>
              {" "}
              Register
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default index;
