import React,{useState} from 'react'
import Image from 'react-bootstrap/Image'
import {Instagram,Linkedin,Phone} from 'react-bootstrap-icons'
import styles from './TeamMemberCard.module.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function TeamMemberCard(props) {

    const lineColors = ['red','green','blue','yellow'];
    const color = lineColors[props.index%4];
    var namelist = props.member.name.split(" ");
    var imagesource = "https://firebasestorage.googleapis.com/v0/b/pecfest-589fa.appspot.com/o/POR%20Images%2F"+namelist[0]+"%20"+namelist[1]+"?alt=media";

  return (
    <div className={`m-4 ${styles.membertile}`}>
        <Image className={`${styles.memberimage}`} roundedCircle src={imagesource}></Image>
        <div className='my-2' style={{fontSize:"25px"}}>{props.member.name}</div>
        <hr className={`${styles.detailsSeparator}`} style={{height:"3px",backgroundColor:color}}></hr>
        <div style={{fontSize:"20px"}}>{props.member.position}</div>
        <div className='d-flex justify-content-around align-items-center w-50 m-auto mt-3'><a href={props.member.instagram}><Instagram className={`fa fa-lg ${ styles.instagram}`}/></a>

            <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 200 }}
            overlay={
                <Tooltip className={`${styles.tooltipdesign}`}>
                    {props.member.number}
                </Tooltip>
            }
        >
            <a><Phone className={`fa fa-lg ${ styles.phone}`}/></a>
        </OverlayTrigger>
        <a href={props.member.linkedin}><Linkedin className={`fa fa-lg ${styles.linkedin}`}/></a>
        </div>
    </div>
  )
}

export default TeamMemberCard