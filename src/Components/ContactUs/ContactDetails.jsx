import React from "react";
import IconCard from ".//IconCard";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactDetails.module.css";

const pecGmapLink = "https://goo.gl/maps/wEYQ7eW9UUmaj6pe8";

const ContactDetails = () => {
  const socialHandles = [
    {
      name: "instagram",
      href: "https://www.instagram.com/pec.pecfest/",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/pecfestofficial/",
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/c/PECFESTOFFICIAL",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/company/pecfest/",
    },
  ];
  return (
    <div className="d-flex flex-column me-3 justify-content-center">
      <IconCard
        icon={faPhone}
        url="tel:+91-6283730175"
        title="Call us directly at"
        desc="+91-6283730175 (Events)"
      />
      <IconCard
        icon={faEnvelope}
        url="mailTo:pecfest2022.webmaster@gmail.com"
        title="Reach out via email at"
        desc="pecfest2022.webmaster@gmail.com"
      />
      <IconCard
        icon={faLocationDot}
        url={pecGmapLink}
        title="Visit us at"
        desc="Punjab Engineering College, Sector 12, Chandigarh"
      />
      <div className="d-flex flex-column align-items-center align-items-lg-start text-white mt-5 mb-4 ms-4 text-uppercase main_font">
        Follow us:
        <div className="d-flex flex-row justify-content-center justify-content-lg-start mt-2">
          {socialHandles.map((handle) => (
            <a href={handle.href} target="_blank">
              <i
                className={`fa-brands fa-${handle.name} me-3 ${
                  styles[handle.name]
                } ${styles.socialIcon}`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
