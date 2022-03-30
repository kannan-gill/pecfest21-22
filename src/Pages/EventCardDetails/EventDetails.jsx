import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Event from "Components/EventCard/Event";
import EventDetailsTile from "Components/EventDetailsTile/EventDetailsTile";
import Filters from "Components/Filters/Filters";
import StarsBg from "Components/StarsBg";
import Tag from "Components/Tag/Tag";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { getDocByIdRealTime } from "services";
import EventRegister from "../../Components/EventRegister/EventRegister";
import styles from "./EventDetails.module.scss";
const EventDetails = ({setAlwaysOpen}) => {
  const location = useLocation();
  const urlParams = useParams();
  const [isTechnical] = useState(
    location.pathname?.split("/")[1] === "tech-events"
  );
  const [eventDetails, seteventDetails] = useState(null);
  const getEventDetails = async () => {
    console.log(urlParams);
    getDocByIdRealTime("events", urlParams.eventId, (event) => {
      seteventDetails(event);
      console.log("event", event);
    });
  };
  useEffect(() => {
    getEventDetails();
  }, []);

    useEffect(() => {
    setAlwaysOpen(true);
    const cleanUp = () => {
      setAlwaysOpen(false);
    };
    return cleanUp;
  });
  return (
    <>
      {/* <StarsBg /> */}
      {eventDetails && (
        <div
          className="vh-100 overflow-auto p-0 d-flex flex-column animate__animated animate__fadeIn"
          style={
            !isTechnical
              ? { background: "linear-gradient(black, #240d1a)" }
              : { background: "linear-gradient(black, #05161d)" }
          }
        >
          <div className="offset-lg-3 offset-md-6 mt-5 pt-4 h-100 p-1">
            <div className="d-flex flex-column p-3 h-100 p-0 m-0">
              <div className="d-flex flex-column px-2 flex-grow-1 ">
                <div
                  className={`w-100 h-100  position-relative ${styles.event_tile}`}
                  style={{
                    background: `url(${eventDetails?.backdrop})`,
                  }}
                >
                  <div
                    className={` d-flex pt-5 flex-column px-5 pb-3 justify-content-end w-100 h-100 ${styles.overlay}`}
                  >
                    <div className="text-white">
                      {eventDetails?.tags.map((tag) => (
                        <Tag disabled tag={tag} />
                      ))}
                      <h1 className="mb-2">{eventDetails?.name}</h1>
                      <p>{eventDetails?.desc}</p>
                    </div>
                  </div>
                  <Button
                    className="position-absolute top-0 end-0 br-20p m-3 px-3 py-2"
                    variant="danger"
                    size="sm"
                  >
                    <FontAwesomeIcon
                      icon={faTelevision}
                      color="white"
                      size="1x"
                      className="me-2 fa-fw"
                    />
                    Watch Live!
                  </Button>
                </div>
              </div>
              <div className="mt-3 d-flex flex-row flex-wrap">
                <div className="col-12 col-xl-6 px-2 mb-3">
                  <EventDetailsTile
                    buttonColor="warning"
                    buttonHandler={() => {}}
                    buttonText="Know More"
                    background="https://picsum.photos/1920/1080?random"
                    title="Event Details"
                  >
                    Some general description regarding time and venue<br/>
                    Is a child hence can be any dom element
                  </EventDetailsTile>
                </div>
                <div className="col-12 col-xl-6 px-2 mb-3">
                  <EventDetailsTile
                    buttonColor="warning"
                    buttonHandler={() => {}}
                    buttonText="Register"
                    background="https://picsum.photos/1920/1080?random"
                    title="Register Now"
                  >
                    
                  </EventDetailsTile>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
