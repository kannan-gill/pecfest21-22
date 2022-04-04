import { style } from "@mui/system";
import React, { useState } from "react";
import styles from "./Tag.module.scss";

const Tag = ({ tag, disabled = false, onChange = () => {} }) => {
  const [activeTag, setActiveTag] = useState(disabled);
  
  return <span onClick={()=>{
    onChange();
    if(!disabled){
      setActiveTag((prevState)=>!prevState);
    }
  }} className={`${styles.tag} animate__animated animate__fadeIn mx-1 px-3 py-1 my-2 ${!disabled && 'cursor-pointer'} fw-bold ${activeTag && styles.active_tag}`}>{tag}</span>;
};

export default Tag;
