import React,{useState} from 'react'
import Image from 'react-bootstrap/Image'
import {Instagram,Linkedin,Phone} from 'react-bootstrap-icons'
import styles from './TeamMemberCard.module.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function TeamMemberCard(props) {

    const lineColors = ['red','green','blue','yellow'];
    const color = lineColors[props.index%4];

  return (
    <div className={`m-4 ${styles.membertile}`}>
        <Image className={`${styles.memberimage}`} roundedCircle src={props.imageSource}></Image>
        <div className='my-2' style={{fontSize:"25px"}}>{props.member}</div>
        <hr className={`${styles.detailsSeparator}`} style={{height:"3px",backgroundColor:color}}></hr>
        <div style={{fontSize:"20px"}}>{props.position}</div>
        <div className='d-flex justify-content-around align-items-center w-50 m-auto mt-3'><Instagram className={`fa fa-lg ${ styles.instagram}`}/>

            <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 200 }}
            overlay={
                <Tooltip className={`${styles.tooltipdesign}`}>
                    {props.memberNumber}
                </Tooltip>
            }
        >
            <Phone className={`fa fa-lg ${ styles.phone}`}/>
        </OverlayTrigger>
        <Linkedin className={`fa fa-lg ${styles.linkedin}`}/>
        </div>
    </div>
  )
}

export default TeamMemberCard