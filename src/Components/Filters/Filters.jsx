import useOutsideClickHandler from "hooks/useOutsideClickHandler";
import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import styles from "./Filters.module.scss";

const Filters = ({ searchEvent, setSearchEvent, filtersArray, setTags }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [filters, setFilters] = useState(filtersArray);
  useEffect(() => {
    setFilters(filtersArray);
  }, [filtersArray]);
  const { ref } = useOutsideClickHandler(setShowFilter);
  const filterChangeHandler = (index) => {
    setFilters((prevVal) => {
      const val = [...prevVal];
      console.log(val);
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
    <span className="text-white mt-4 mb-1 px-5 col-12 col-md-4 offset-md-8 h-auto ">
      <div className="d-block d-xl-flex flex-row justify-content-end position-relative">
        <InputGroup className="mb-3 w-100 position-relative">
          <FormControl
            placeholder="Search Event"
            aria-label="Search Event"
            aria-describedby="basic-addon2"
            value={searchEvent}
            onChange={(event) => {
              console.log(event.target.value);
              setSearchEvent(event.target.value);
            }}
          />
          <Button
            variant={`${showFilter ? "warning" : "outline-secondary"}`}
            id="button-addon2"
            className={`${styles.no_focus} `}
            onClick={() => {
              setShowFilter((prevState) => !prevState);
              setComponentLoaded(true);
            }}
          >
            Filters
          </Button>

          {componentLoaded && (
            <div
              ref={ref}
              className={`position-absolute zi-top ${
                showFilter ? " animate__fadeIn" : "animate__fadeOut"
              } top-100 end-0 mt-2 text-dark bg-white animate__animated animate__faster ${
                styles.filters_container
              }`}
            >
              <div className="p-2">Categories</div>
              <hr className="m-0 p-0" />
              <Form className="p-2 text-start">
                {filters.map((filter, index) => (
                  <Form.Check
                    type="checkbox"
                    className={`${styles.checkbox} mt-1`}
                    label={filter.text}
                    id={`filter-${index}`}
                    checked={filter.value}
                    name={filter.text}
                    onChange={() => filterChangeHandler(index)}
                  />
                ))}
              </Form>
            </div>
          )}
        </InputGroup>
      </div>
    </span>
  );
};

export default Filters;
