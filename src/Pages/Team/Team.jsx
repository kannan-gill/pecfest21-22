import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from './Team.module.css'
import BackButton from '../../Components/BackButton/BackButton'
import { useNavigate } from "react-router-dom";

function Team() {

    const navigate = useNavigate();

    function handleBack(e){
        navigate('/');
    }

  return (
    <div className={`${styles.committeeBackground}`}>
        <Container fluid className='w-100 h-100'>
            <BackButton className={`${styles.back_Button}`} clickHandler={handleBack}/>
            <Row className={`d-flex justify-content-center ${styles.pageheader}`}>TEAM</Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={6} className='d-flex justify-content-center'><img className={`w-75 h-auto m-1 ${styles.image}`} src='../../Images/committee/3.png' alt='not-found'/></Col>
                <Col md={6} className='d-flex justify-content-center'><img className={`w-75 h-auto m-1 ${styles.image}`} src='../../Images/committee/4.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/5.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/6.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/7.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/8.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/10.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/11.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/12.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/13.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/14.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/15.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/16.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/17.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/18.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/19.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/20.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/21.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/22.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/23.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/24.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/25.png' alt='not-found'/></Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/26.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/27.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/28.png' alt='not-found'/></Col>
                <Col md={3}><img className={`w-100 h-auto m-1 ${styles.image}`} src='../../Images/committee/29.png' alt='not-found'/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Team