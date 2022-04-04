import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.opaquebg}`}></div>
      <div className={`${styles.cardbg}`}>
          <div style={{textAlign:"center"}}><img className={`${styles.cardimage}`} src='../../Images/Kannan_Gill.jpg'/></div>
        {/* </Row> */}
        <div style={{fontSize:"25px"}} className={`${styles.positionstext}`}>
          {props.member}
        </div>
        <div style={{fontSize:"20px"}} className={`${styles.positionstext}`}>
          {props.position}
        </div>
      </div>
    </div>
  )
}

export default Card