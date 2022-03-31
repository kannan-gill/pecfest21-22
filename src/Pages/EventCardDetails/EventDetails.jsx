import { faCirclePlus, faTelevision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Event from "Components/EventCard/Event";
import EventDetailsTile from "Components/EventDetailsTile/EventDetailsTile";
import Filters from "Components/Filters/Filters";
import StarsBg from "Components/StarsBg";
import Tag from "Components/Tag/Tag";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { getDocByIdRealTime } from "services";
import ModalVideo from "react-modal-video";
import styles from "./EventDetails.module.scss";
import "react-modal-video/scss/modal-video.scss";
import EventRegistration from "Components/EventRegistration/index";
const EventDetails = ({ setAlwaysOpen }) => {
  const location = useLocation();
  const urlParams = useParams();
  const [isTechnical] = useState(
    location.pathname?.split("/")[1] === "tech-events"
  );
  const [eventDetails, seteventDetails] = useState(null);
  const [isVideoOpen, setVideoOpen] = useState(false);
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
  const [isRegistereOpen, setRegisterOpen] = useState(false);
  const registerHandler = () => {
    if(eventDetails.isTeamEvent){
      setRegisterOpen(true);
    }
    
  }
  return (
    <>
      {eventDetails && (
        <div
          className={`vh-100 d-flex flex-column animate__animated animate__fadeIn ${styles.container}`}
        >
          <StarsBg />
          <div className="zi-top overflow-auto flex-grow-1">
            <div className="offset-lg-3 offset-md-6 h-100 p-0">
              <div className="d-flex flex-column px-3 h-100 p-0 m-0">
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
                        <h1 className="mb-2  main_font">
                          {eventDetails?.name}
                        </h1>
                        <p className=" main_font">{eventDetails?.desc}</p>
                      </div>
                    </div>
                    {eventDetails?.liveStreamVideoId && (
                      <>
                        <Button
                          className="animate__animated animate__fadeIn position-absolute top-0 end-0 br-20p m-3 px-3 py-2 main_font rounded border border-dark"
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            setVideoOpen(true);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faTelevision}
                            color="white"
                            size="1x"
                            className="me-2 fa-fw"
                          />
                          Watch Live!
                        </Button>

                        <ModalVideo
                          channel="youtube"
                          isOpen={isVideoOpen}
                          videoId={eventDetails?.liveStreamVideoId}
                          youtube={{
                            mute: 1,
                            autoplay: 1,
                          }}
                          onClose={() => setVideoOpen(false)}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-3 d-flex flex-row flex-wrap">
                  <div className="col-12 col-xl-8 px-2 mb-3">
                    <EventDetailsTile
                      buttonColor="warning"
                      buttonHandler={() => {
                        const url = eventDetails?.rulebookUrl;
                        if (url) window.open(url, "_blank");
                      }}
                      buttonText="Know More"
                      background="https://picsum.photos/1366/768?random"
                      title="Event Details"
                    >
                      Some general description regarding time and venue
                      <br />
                      Is a child hence can be any dom element
                      <br />
                    </EventDetailsTile>
                  </div>
                  <div className="col-12 col-xl-4 px-2 mb-3">
                    <EventDetailsTile
                      buttonColor="warning"
                      buttonHandler={() => {
                        registerHandler();
                      }}
                      buttonText="Register"
                      background="https://picsum.photos/1600/900?random"
                      title="Register Now"
                    ></EventDetailsTile>
                  </div>
                  <Modal
                    centered
                    show={isRegistereOpen}
                    className={styles.bg_brown}
                    onHide={() => setRegisterOpen(false)}
                  >
                    <Modal.Body
                      className={`px-5 py-3 d-flex flex-column justify-content-center text-white border-muted main_font`}
                    >
                      <EventRegistration />
                    </Modal.Body>
                  </Modal>
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
