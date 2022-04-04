import React,{useState,useEffect} from 'react'
import {Container,Row} from 'react-bootstrap'
import styles from './Team.module.css'
import PecfestTeams from 'Components/TeamTiles/PecfestTeams';
import StarsBg from '../../Components/StarsBg/index';
import { getList } from 'services';


function Team() {

    const [membersData, setMembersData] = useState([]);

    useEffect(()=>{
        getList('team').then(data=>{
            data.sort(function(a,b){return a.rank - b.rank})
            data.forEach(team=>{
                team.members.sort((a,b) => (a.position < b.position) ? 1 : ((b.position < a.position) ? -1 : 0))
            })
            setMembersData(data);
        });
    },[])


  return (
    <div className={`vw-100 vh-100 d-flex flex-column`}>
      <StarsBg />
      <Container
        fluid
        className={`d-flex flex-column overflow-hidden ${styles.main_container}`}
      >
        <div className={`d-flex flex-column flex-grow-1 ${styles.container}`}>
          <Row className={`d-flex justify-content-center ${styles.pageheader}`}>
            TEAM
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            {membersData.map((item, index) => {
              return (
                <PecfestTeams key={item.name} teamname={item.name} teamMembers = {item.members}/>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Team