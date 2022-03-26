import React, { useState } from "react";
import StarsBg from "Components/StarsBg";
import SimpleInput from "Components/Utilities/SimpleInput";
import SelectInput from "Components/Utilities/SelectInput";
import styles from "./ContactUs.module.css";
import Button from "Components/Utilities/Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactUs() {
  const initialState = {
    name: "",
    message: "",
    query: "",
    email: "",
  };
  const [queryobject, setqueryobject] = useState(initialState);
  const [validQueryType, setValidQueryType] = useState(true);

  const changeHandler = (name, value) => {
    setqueryobject({ ...queryobject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryobject.query === "") {
      setValidQueryType(false);
      return;
    } else {
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
        toast.success("Feedback sent successfully!", { autoClose: 1000 });
        setqueryobject(initialState);
      })
      .catch((err) => {
        toast.error("Unable to send email");
        console.log("Error sending feedback", err.text);
      });
  };

  return (
    <div style={{ fontFamily: "Audiowide" }}>
      <StarsBg />
      <div className="bg-black text-white overflow-auto">
        <h1 className="text-center mt-5">CONTACT US</h1>
        <hr style={{ height: "5px" }} className={`${styles.underline}`} />
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <h4 className="w-50 text-center">For any query reach out to us</h4>
        </div>
        <div className="mt-2 d-flex justify-content-center align-items-center">
          <h5 className="w-50 text-center">
            We are here to ensure best user experience for you
          </h5>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <form
            className={`mt-5 w-50 ${styles.formbg}`}
            onSubmit={handleSubmit}
          >
            <div className={`${styles.formitem}`}>
              <SimpleInput
                type="text"
                icon="user"
                placeholder="Name"
                name="name"
                val={queryobject.name}
                changeFunc={changeHandler}
              />
            </div>
            <div className={`${styles.formitem}`}>
              <SimpleInput
                type="email"
                icon="at"
                placeholder="Email"
                name="email"
                val={queryobject.email}
                changeFunc={changeHandler}
              />
            </div>
            <div className={`${styles.formitem}`}>
              <SelectInput
                val={queryobject.query}
                changeFunc={changeHandler}
                name="query"
                icon="question"
                label="Query Type"
                disabledOption="Query Type"
                options={[
                  "General Feedback",
                  "Registration Query",
                  "Competition Query",
                  "Website Bug",
                  "Other Query",
                ]}
                isValid={validQueryType}
              />
            </div>
            <div className={`${styles.formitem}`}>
              <SimpleInput
                type="text"
                icon="pen"
                placeholder="Message"
                name="message"
                val={queryobject.message}
                changeFunc={changeHandler}
              />
            </div>
            <div>
              <Button type="submit">SUBMIT!</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
