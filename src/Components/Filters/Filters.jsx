import React, { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import Tag from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
const Filters = ({ searchEvent, setSearchEvent, filtersArray, setTags }) => {
  const [filters, setFilters] = useState(filtersArray);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);
  useEffect(() => {
    setFilters(filtersArray);
  }, [filtersArray]);
  const filterChangeHandler = (index) => {
    setFilters((prevVal) => {
      const val = [...prevVal];
      val[index] = {
        text: val[index].text,
        value: !val[index].value,
      };
      return val;
    });
  };
  useEffect(() => {
    setTags(
      filters
        .filter((filter) => filter.value === true)
        .map((filter) => filter.text)
    );
  }, [filters]);

  return (
    <span className="text-white mt-4 mb-1 px-5 col-12 h-auto ">
      <div className="d-flex mb-2 flex-row align-items-center flex-wrap position-relative">
        <div className={`d-none d-lg-block w-25 me-3 position-relative`}>
          <input
            placeholder="Event Name"
            type="text"
            onChange={(e) => {
              setSearchEvent(e?.target?.value);
            }}
            className={`py-1 px-2 ps-3 bg-transparent w-100 ${styles.input}`}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="white"
            size="1x"
            className="position-absolute end-0 top-50 translate-middle-y me-3"
          />
        </div>
        <div className="w-100 d-flex d-lg-none flex-row">
          <div
            className={`d-flex  d-lg-none mb-3 flex-grow-1 position-relative`}
          >
            <input
              placeholder="Event"
              type="text"
              onChange={(e) => {
                setSearchEvent(e?.target?.value);
              }}
              className={`py-1 px-2 ps-3 w-100 bg-transparent ${styles.input}`}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="white"
              size="1x"
              className="position-absolute end-0 top-50 translate-middle-y me-3"
            />
          </div>
          <div
            className={`d-flex d-lg-none m-0 p-0 mb-3 ps-1 ${styles.hideButton}`}
          >
            <Tag
              disabled
              onChange={() => {
                setIsFilterVisible((prevState) => !prevState);
              }}
              tag={isFiltersVisible ? "Hide Filters" : "Show Filters"}
            />
          </div>
        </div>

        {filters.map((filter, index) => {
          return (
            <div
              className={`${
                isFiltersVisible ? "d-flex" : "d-none"
              } d-lg-flex flex-row animate__animated animate__fadeIn`}
            >
              <Tag
                className="my-2"
                key={index}
                tag={filter?.text}
                onChange={() => filterChangeHandler(index)}
              />
            </div>
          );
        })}
      </div>
    </span>
  );
};

export default Filters;
