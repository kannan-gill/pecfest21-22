import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from './Card.module.css'

function Card() {
  return (
    <div>
        <div className={`${styles.cardbg}`}>
            <div className={`${styles.opaquebg}`}>
            </div>
            <img src='../../Images/Kannan_Gill.jpg'/>
            <div style={{fontSize:"3vw"}} className={`${styles.text}`}>Kannan Gill</div>
            <div style={{fontSize:"2vw"}} className={`${styles.text}`}>Head</div>
        </div>
    </div>
  )
}

export default Card