import React, { useEffect,useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import { getList } from 'services';
import styles from '../../Pages/Team/Team.module.css'
import TeamMemberCard from './TeamMemberCard'

function PecfestTeams(props) {

  return (
    <div>
        <Row style={{fontSize:"30px",fontFamily:"Audiowide",color:'white'}} className='d-flex justify-content-center align-items-center pb-3'>
          {props.teamname}
        </Row>
        <Row className="d-flex justify-content-center align-items-center">

          {props.teamMembers.map((member,index)=>{
            return  <Col key={member.name} lg={3} sm={6}><TeamMemberCard member={member} index={index}/></Col>
          })}
        </Row>
            
    
            <hr style={{height:"5px", backgroundColor:"white"}} className={`${styles.separatingline}`}></hr>
    </div>
  )
}

export default PecfestTeams