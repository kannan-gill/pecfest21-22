import React, { useEffect, useState } from "react";
import Event from "../EventCard/Event";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import Navbar from "Components/Navbar";
import { getListRealTime } from "services";
import styles from "./EventList.module.css";
import Filters from "../Filters/Filters";
import StarsBg from "Components/StarsBg";
import Button from "../../../Components/Utilities/Button";
function EventList() {
  const [eventDetails, seteventDetails] = useState([]);
  const [isTechnical, setTechnical] = useState(true);
  const [searchEvent, setSearchEvent] = useState("");
  const getEventList = async () => {
    getListRealTime("events", (eventsList) => {
      seteventDetails(eventsList);
      console.log(eventsList);
    });
  };
  useEffect(() => {
    getEventList();
  }, []);

  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{ background: "#07202a" }}
    >
      <StarsBg />
      <div className={`${styles.pageTitle}`}>EVENTS</div>
      <div className="px-3">
        <div className={`${styles.divider}`} />
      </div>
      <div className="w-75 mx-auto">
        <div className="row">
          <div className="d-flex justify-content-center col-12 col-xl-4 offset-xl-4 align-items-center p-0">
            <Button type="button" onClickFunc={() => setTechnical(true)}>
              Technical
            </Button>
            <Button type="button" onClickFunc={() => setTechnical(false)}>
              Cultural
            </Button>
          </div>
          <Filters searchEvent={searchEvent} setSearchEvent={setSearchEvent} />
        </div>
      </div>

      <div className="d-flex flex-row flex-wrap w-75 mx-auto flex-grow-1">
        {eventDetails
          .filter((event) => {
            if (event.technicalEvent === !isTechnical) {
              return false;
            }
            if (
              event.name.toLowerCase().indexOf(searchEvent.toLowerCase()) == -1
            ) {
              // Doesnt match
              return false;
            }
            return true;
          })
          .map((event, ind) => {
            return <Event key={ind} event={event} />;
          })}
      </div>
    </div>
  );
}

export default EventList;
