import { faCirclePlus, faTelevision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Event from "Components/EventCard/Event";
import EventDetailsTile from "Components/EventDetailsTile/EventDetailsTile";
import Filters from "Components/Filters/Filters";
import StarsBg from "Components/StarsBg";
import Tag from "Components/Tag/Tag";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { getDocByIdRealTime, updateDoc } from "services";
import ModalVideo from "react-modal-video";
import styles from "./EventDetails.module.scss";
import "react-modal-video/scss/modal-video.scss";
import EventRegistration from "Components/EventRegistration/index";
import { AuthContext } from "context/AuthContext";
import { toast } from "react-toastify";
import createDOMPurify from "dompurify";

const EventDetails = ({ setAlwaysOpen }) => {
  const location = useLocation();
  const urlParams = useParams();
  const windowDom = document.window;
  const DOMPurify = createDOMPurify(windowDom);
  const [alreadyRegistered, setAlreadyRegistered] = useState(null);
  const [eventsCleanup, setEventsCleanUp] = useState(null);
  const userDets = useContext(AuthContext);
  const [eventDetails, seteventDetails] = useState(null);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [prelimLink, setPrelimLink] = useState("");
  const [loader, setLoader] = useState(false);
  const [registeredTeamId, setRegisteredTeamId] = useState("");
  const checkAlreadyRegistered = (event) => {
    const eventDetails = event;
    if (!eventDetails) {
      return;
    }
    const eventList = userDets["registeredEvents"];

    if (eventList) {
      // if includes
      setAlreadyRegistered(
        eventList.some((event) => {
          if (event.eventId === eventDetails.id) {
            setPrelimLink(event.prelimLink);
            setRegisteredTeamId(event.teamId);
          }
          return event.eventId === eventDetails.id;
        })
      );
    } else {
      setAlreadyRegistered(false);
    }
  };
  const getEventDetails = async () => {
    if (eventsCleanup) {
      eventsCleanup();
    }
    const cleanUp = getDocByIdRealTime("events", urlParams.eventId, (event) => {
      seteventDetails(event);
      checkAlreadyRegistered(event);
    });
    setEventsCleanUp(() => cleanUp);
  };
  useEffect(() => {
    getEventDetails();
    const cleanupFunction = () => {
      if (eventsCleanup) {
        eventsCleanup();
      }
    };
    return cleanupFunction;
  }, [userDets]);

  useEffect(() => {
    setAlwaysOpen(true);
    const cleanUp = () => {
      setAlwaysOpen(false);
    };
    return cleanUp;
  });
  const [isRegistereOpen, setRegisterOpen] = useState(false);
  const registerUserInEvent = async (teamId = "") => {
    const key = "registeredEvents";
    let eventsList = userDets[key];
    let eventRegistered = eventDetails?.registeredUsers;
    if (!eventsList) {
      eventsList = [];
    }
    if (!eventRegistered) {
      eventRegistered = [];
    }
    setLoader(true);
    try {
      const payloadData = {
        ...userDets,
        [key]: [
          ...eventsList,
          { eventId: eventDetails.id, prelimLink, teamId },
        ],
      };
      await updateDoc("users", userDets.id, payloadData);
      await updateDoc("events", eventDetails.id, {
        ...eventDetails,
        registeredUsers: [
          ...eventRegistered,
          { userId: teamId ? teamId : userDets.id, prelimLink },
        ],
      });

      setRegisterOpen(false);
      setLoader(false);
    } catch (err) {
      toast.error(err);
      setLoader(false);
    }
  };
  const registerHandler = () => {
    if (alreadyRegistered) {
      setRegisterOpen(true);
      return;
    }
    if (eventDetails.isTeamEvent || eventDetails.hasPrelimEntry) {
      setRegisterOpen(true);
    } else {
      registerUserInEvent();
    }
  };
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
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${eventDetails?.backdrop})`,
                    }}
                  >
                    <div
                      className={` d-flex pt-5 flex-column px-1 px-md-5 pb-3 justify-content-end w-100 h-100 ${styles.overlay}`}
                    >
                      <div className="text-white">
                        {eventDetails?.tags.map((tag, ind) => (
                          <Tag key={`tag-${ind}`} disabled tag={tag} />
                        ))}
                        <h1 className={`${styles.responsive_heading} mb-2  main_font`}>
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
                  <div
                    className={`col-12 px-2 mb-3 ${
                      eventDetails?.isRegistrationOpen && "col-xl-8"
                    }`}
                  >
                    <EventDetailsTile
                      buttonColor="warning"
                      buttonHandler={() => {
                        const url = eventDetails?.rulebookUrl;
                        if (url) window.open(`//${url}`, "_blank");
                      }}
                      buttonText={eventDetails?.rulebookUrl && 'Rulebook'}
                      background="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/abstract5.png?alt=media"
                      title="Event Details"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(eventDetails.details),
                        }}
                      />
                    </EventDetailsTile>
                  </div>
                  {eventDetails.isRegistrationOpen && (
                    <div className="col-12 col-xl-4 px-2 mb-3">
                      {!alreadyRegistered ? (
                        <EventDetailsTile
                          buttonColor="warning"
                          buttonHandler={() => {
                            registerHandler();
                          }}
                          buttonText="Register"
                          background="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/abstract3.png?alt=media"
                          title="Register Now"
                        ></EventDetailsTile>
                      ) : (
                        <EventDetailsTile
                          buttonColor="warning"
                          buttonText={eventDetails.isTeamEvent && `View Team`}
                          background="https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/abstract3.png?alt=media"
                          buttonHandler={() => {
                            registerHandler();
                          }}
                          title=""
                        >
                          <h3 className="text-white">Already Registered!</h3>
                          {prelimLink && (
                            <div className="w-100 d-flex flex-column">
                              <p className="d-inline text-warning text-nowrap mb-0 mt-2">
                                Prelim Link:
                              </p>
                              <a
                                target="_blank"
                                href={`//${prelimLink}`}
                                className="text-white text-truncate"
                              >
                                {prelimLink}
                              </a>
                            </div>
                          )}
                        </EventDetailsTile>
                      )}
                    </div>
                  )}
                  <Modal
                    centered
                    show={isRegistereOpen}
                    className={styles.bg_brown}
                    scrollable
                    onHide={() => setRegisterOpen(false)}
                  >
                    <Modal.Body
                      className={`px-5 py-3 d-flex flex-column justify-content-center text-white border-muted main_font`}
                    >
                      <EventRegistration
                        registeredTeamId={registeredTeamId}
                        userDets={userDets}
                        alreadyRegistered={alreadyRegistered}
                        loader={loader}
                        prelimLink={prelimLink}
                        setPrelimLink={setPrelimLink}
                        onRegister={registerUserInEvent}
                        event={eventDetails}
                      />
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
