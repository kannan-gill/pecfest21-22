import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from './Team.module.css'
import BackButton from '../../Components/BackButton/BackButton'
import { useNavigate } from "react-router-dom";
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
            console.log(data)
            setMembersData(data);
        });
    },[])

    const navigate = useNavigate();

    function handleBack(e){
        navigate('/');
    }


  return (
    <div className={`${styles.committeeBackground}`}>
        <StarsBg/>
        <Container fluid className='w-100 h-100 overflow-auto'>
            <Row className={`d-flex justify-content-center ${styles.pageheader}`}>TEAM</Row>
                {membersData.map(item=>{
                    return <PecfestTeams key={item.name} teamname={item.name} teamMembers = {item.members}/>
                })}
        </Container>
    </div>
  )
}

export default Team