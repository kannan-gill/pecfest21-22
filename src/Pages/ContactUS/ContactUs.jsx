import ContactDetails from "Components/ContactUs/ContactDetails";
import ContactForm from "Components/ContactUs/ContactForm";
import StarsBg from "Components/StarsBg";
import React from "react";
import styles from "./ContactUs.module.css";


const ContactUs1 = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column">
      <StarsBg />
      <div
        className={` d-flex flex-column align-items-center flex-grow-1 ${styles.main_container}`}
      >
        <div
          className={`position-relative main_font text-uppercase w-100 text-center ${styles.heading}`}
        >
          Contact
          <div
            className={`position-absolute top-50 start-50 translate-middle w-100 color_yellow ${styles.headingTop}`}
          >
            Get in Touch
          </div>
        </div>
        <div
          className={`d-flex flex-row-reverse flex-grow-1 flex-wrap justify-content-evenly align-items-center w-85`}
        >
          <ContactForm/>
          <ContactDetails/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs1;
