import React,{useState,useEffect} from 'react';
import Competition from './Competition';
import {Container} from 'react-bootstrap';
import Button from '../../Components/Utilities/Button';
import styles from '../../Pages/Competitions/Competitions.module.css'
import Navbar from 'Components/Navbar';

function Competitions() {

    const [Comp, setComp] = useState([]);
    const [Technical, setTechnical] = useState(true);

    useEffect(()=>{
        //load events from firebase and store in react state
        
        //filter competitions by category

    },[Technical])

  return <div className={`${styles.compContainer}`} style={{height:"100vh" , background: Technical ? `url("../../Images/technicalevents2.png")` : `url("../../Images/cultural4.png")`}}>
     <Navbar />
    <Container fluid className="m-0 p-0 h-100" >
        <div className={`${styles.pageTitle}`}>COMPETITIONS</div>
        <div className='d-flex justify-content-center pb-4'>
        <Button onClickFunc={()=>setTechnical(true)}>Technical</Button>
        <Button onClickFunc={()=>setTechnical(false)}>Cultural</Button>
        </div>
        <div className={`${styles.divider}`}></div>
        {Technical ? <div className={`${styles.category}`}>Technical</div> : <div className={`${styles.category}`}>Cultural</div>}
        {Technical ? Comp.filter(element=>element.category === "Technical").map(competition=>{
            return <Competition competition={competition}/>
        }) : 
        Comp.filter(element=>element.category ==="Cultural").map(competition=>{
            return <Competition competition={competition}/>
        })
        }
    </Container>
  </div>;
}

export default Competitions;
