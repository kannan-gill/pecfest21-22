import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TechSelector.module.scss";

const TechCulturalSelector = ({
  leftName = "Technical",
  rightName = "Cultural",
  leftRoute,
  rightRoute,
  technicalImageUrl,
  culturalImageUrl,
}) => {
  const [openTechnical, setOpenTechnical] = useState(false);
  const [openCultural, setOpenCultural] = useState(false);
  const [isHoveredOnTechnical, setHoveredOnTechnical] = useState(false);
  const [isHoveredOnCultural, setHoveredOnCultural] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (openTechnical || openCultural) {
      setTimeout(() => {
        if (openTechnical) {
          navigate(leftRoute);
          return;
        }
        navigate(rightRoute);
      }, 700);
    }
  }, [openTechnical, openCultural]);
  return (
    <>
      <div
        className="d-none bg-warning d-md-flex vh-100 zi-top"
        style={{ background: "#07202a" }}
      >
        <div
          onMouseOver={() => {
            setHoveredOnTechnical(true);
          }}
          onMouseLeave={() => {
            setHoveredOnTechnical(false);
          }}
          onClick={() => {
            setOpenTechnical(true);
          }}
          className={`bg-dark ${styles.image}  ${styles.cultural} ${
            openTechnical && styles.open_page}
            ${isHoveredOnCultural && styles.cultural_small}
          } cursor-pointer`}
        >
          <h1
            onClick={() => {
              setOpenTechnical(true);
            }}
            className={`${
              openCultural && "animate__fadeOutLeft"
            } zi-top cursor-pointer text-white position-absolute top-50 mx-5 px-5 translate-middle-y ${
              styles.header_large
            }`}
          >
            {leftName}
          </h1>
          <img
            src={technicalImageUrl}
            className={`${styles.culturalImage} vh-100 vw-100`}
          />
        </div>

        <div
          onClick={() => {
            setOpenCultural(true);
          }}
          onMouseOver={() => {
            setHoveredOnCultural(true);
          }}
          onMouseLeave={() => {
            setHoveredOnCultural(false);
          }}
          className={`${styles.image} ${
            !(openTechnical || openCultural) && styles.technical
          } ${openCultural && styles.open_page}
          ${openTechnical && styles.close_page}
          ${isHoveredOnTechnical && styles.technical_small}
            cursor-pointer bg-image bg-dark `}
        >
          <h1
            onClick={() => {
              setOpenCultural(true);
            }}
            className={`${
              openTechnical && "animate__fadeOutRight"
            }  zi-top animate__animated animate__faster cursor-pointer text-white position-absolute top-50 end-0 mx-5 px-5 translate-middle-y ${
              styles.header_large
            }`}
          >
            {rightName}
          </h1>
          <img
            src={culturalImageUrl}
            className={`${styles.technicalImage} vh-100 vw-100  `}
          />
        </div>
      </div>
      <div
        className="d-flex bg-dark d-md-none vh-100 zi-top flex-column"
        style={{ background: "#07202a" }}
      >
        <div
          onClick={() => {
            setOpenTechnical(true);
          }}
          className={`cursor-pointer vh-50 mb-1 bg-white position-relative transition-smooth d-flex flex-row justify-content-center ${
            openTechnical && "vh-100 zi-1"
          }`}
        >
          {!openCultural && (
            <h1
              onClick={() => {
                setOpenTechnical(true);
              }}
              className={`animate__animated zi-1 cursor-pointer text-white position-absolute top-50 mx-autor translate-middle-y ${styles.header_large}`}
            >
              {leftName}
            </h1>
          )}

          <img
            src={technicalImageUrl}
            className={`${styles.culturalImage} ${styles.shade} h-100 vw-100`}
          />
        </div>

        <div
          onClick={() => {
            setOpenCultural(true);
          }}
          className={`cursor-pointer bg-image vh-50 pt-1  position-absolute bottom-0 transition-smooth ${
            openCultural && "vh-100"
          }`}
        >
          {!openTechnical && (
            <h1
              onClick={() => {
                setOpenCultural(true);
              }}
              className={`zi-1 animate__animated animate__faster cursor-pointer text-white position-absolute top-50 end-0 mx-5 px-5 translate-middle-y ${styles.header_large}`}
            >
              {rightName}
            </h1>
          )}
          <img
            src={culturalImageUrl}
            className={`${styles.technicalImage}  ${styles.shade} vw-100 h-100`}
          />
        </div>
      </div>
    </>
  );
};

export default TechCulturalSelector;
