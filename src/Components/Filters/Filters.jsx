import React, { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import Tag from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Filters = ({ searchEvent, setSearchEvent, filtersArray, setTags }) => {
  const [filters, setFilters] = useState(filtersArray);
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
          <input placeholder="Event Name" type="text" onChange={(e)=>{
            setSearchEvent(e?.target?.value)
          }} className={`py-1 px-2 ps-3 bg-transparent w-100 ${styles.input}`} />
          <FontAwesomeIcon  icon={faMagnifyingGlass}
          color="white"
          size="1x"
          className="position-absolute end-0 top-50 translate-middle-y me-3" />
        </div>
        <div className={`d-block d-lg-none w-100 mb-3 position-relative`}>
          <input placeholder="Event Name" type="text" onChange={(e)=>{
            setSearchEvent(e?.target?.value)
          }} className={`py-1 px-2 ps-3 bg-transparent w-100 ${styles.input}`} />
          <FontAwesomeIcon  icon={faMagnifyingGlass}
          color="white"
          size="1x"
          className="position-absolute end-0 top-50 translate-middle-y me-3" />
        </div>
        {filters.map((filter, index) => {
          return (<Tag
            key={index}
            tag={filter?.text}
            onChange={() => filterChangeHandler(index)}
          />)
        })}
      </div>
    </span>
  );
};

export default Filters;
