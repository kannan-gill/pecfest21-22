import React, { useEffect, useState } from "react";
import Event from "Components/EventCard/Event";
import ComingSoon from "Pages/ComingSoon/ComingSoon";
import Navbar from "Components/Navbar";
import { getListRealTimeFiltered } from "services";
import styles from "./EventList.module.scss";
import Filters from "Components/Filters/Filters";
import StarsBg from "Components/StarsBg";
import Button from "Components/Utilities/Button";

const EventList = ({ isTechnical, isCompetition = true }) => {
  const [eventDetails, seteventDetails] = useState([]);
  const [searchEvent, setSearchEvent] = useState("");
  const [filtersArray, setFiltersArray] = useState([]);
  const [tags, setTags] = useState([]);
  const [eventsCleanup, setEventsCleanUp] = useState(null);
  const getEventList = async () => {
    const cleanup = getListRealTimeFiltered(
      "events",
      "isCompetition",
      isCompetition,
      "technicalEvent",
      isTechnical,
      (eventsList) => {
        seteventDetails(eventsList);
        console.log(eventsList);
        const filtersArray = eventsList.map((event) => event.tags);
        // @ts-ignore
        const uniqueFiltersArray = [...new Set(filtersArray.flat())];
        console.log(uniqueFiltersArray);
        setFiltersArray(
          uniqueFiltersArray.map((tag) => {
            return { text: tag, value: false };
          })
        );
      }
    );
    setEventsCleanUp(() => cleanup);
  };
  useEffect(() => {
    getEventList();
    const cleanupFunc = () => {
      if (eventsCleanup) {
        eventsCleanup();
      }
    };
    return cleanupFunc;
  }, []);

  useEffect(() => {
    console.log("tags", tags);
  }, [tags]);

  return (
    <div
      className="vh-100 d-flex flex-column animate__animated animate__fadeIn"
      style={
        !isTechnical
          ? { background: "linear-gradient(black, #371629)" }
          : { background: "linear-gradient(black, #07202a)" }
      }
    >
      <StarsBg />
      <div className={`${styles.pageTitle}`}>
        {isCompetition && (isTechnical ? "TECHNICAL" : "CULTURAL")}
        {!isCompetition && (isTechnical ? "WORKSHOPS" : "MEGASHOWS")}
      </div>
      <div className="px-5">
        <div className={`${styles.divider} w-100 w-md-75`} />
      </div>
      <div className="w-md-75 w-100 mx-auto">
        <div className="row">
          <Filters
            setTags={setTags}
            filtersArray={filtersArray}
            searchEvent={searchEvent}
            setSearchEvent={setSearchEvent}
          />
        </div>
      </div>
      <div className="flex-grow-1 overflow-auto d-flex flex-row pb-5 mx-4">
        <div className="d-flex flex-row flex-wrap w-md-75 w-100 mx-auto">
          {eventDetails
            .filter((event) => {
              if (
                event.name.toLowerCase().indexOf(searchEvent.toLowerCase()) ==
                -1
              ) {
                // Doesnt match
                return false;
              }
              if (tags && !tags.every((tag) => event.tags.includes(tag))) {
                return false;
              }
              return true;
            })
            .map((event, ind) => {
              return (
                <Event key={ind} event={event} isTechnical={isTechnical} isCompetition={isCompetition} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default EventList;
