import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button, Spinner, Form, InputGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ErrorTooltip from "Components/Utilities/ErrorTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const initialState = {
    name: "",
    message: "",
    query: "",
    email: "",
  };
  const [queryobject, setqueryobject] = useState(initialState);
  const [validQueryType, setValidQueryType] = useState(true);
  const [sendingForm, setSendingForm] = useState(false);

  const options = [
    "General Feedback",
    "Registration Query",
    "Competition Query",
    "Website Bug",
    "Other",
  ];

  const changeHandler = (e) => {
    setqueryobject({ ...queryobject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryobject.query === "") {
      setValidQueryType(false);
      return;
    } else {
      setSendingForm(true);
      setValidQueryType(true);
      sendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        queryobject,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then((result) => {
        setSendingForm(false);
        toast.success("Feedback sent successfully!", { autoClose: 2000 });
        setqueryobject(initialState);
      })
      .catch((err) => {
        setSendingForm(false);
        toast.error("Unable to send email", {autoClose: 2000});
        console.log("Error sending feedback", err.text);
      });
  };

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center zi-top ${styles.main_container}`}>
      <form
        className={`w-100 d-flex flex-column align-items-center justify-content-center`}
        onSubmit={handleSubmit}
      >
        <Form.Control
          className={`mb-3 ${styles.form_control} main_font`}
          type="text"
          placeholder="Name"
          name="name"
          value={queryobject.name}
          onChange={changeHandler}
          required
        />
        <Form.Control
          className={`mb-3 ${styles.form_control} main_font`}
          type="email"
          placeholder="Email address"
          name="email"
          value={queryobject.email}
          onChange={changeHandler}
          required
        />
        <InputGroup>
          <Form.Select
            className={`mb-3 ${styles.form_control} main_font ${styles.selectWidth}`}
            value={queryobject.query}
            onChange={changeHandler}
            name="query"
          >
            <option className="color_grey" disabled value="">
              Select Query Type
            </option>
            {options.map((option) => (
              <option className="text-dark" value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
          {!validQueryType ? (
            <ErrorTooltip
              title="Please select a valid query type"
              classes={`${styles.tooltip}`}
            />
          ) : null}
        </InputGroup>
        <Form.Control
          as="textarea"
          rows={4}
          className={`mb-3 ${styles.form_control} main_font`}
          placeholder="Message"
          name="message"
          value={queryobject.message}
          onChange={changeHandler}
          required
        />
        <Button
          className={`animate__animated fw-bold px-3 my-2 mx-2 main_font`}
          type="submit"
          variant="warning"
          style={{
            borderRadius: "5em",
          }}
        >
          {sendingForm ? (
            <Spinner
              animation="border"
              variant="dark"
              size="sm"
              className="mx-4"
            />
          ) : (
            <>
              Submit
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="ms-2"
                size="1x"
              />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
