import React,{useState,useEffect} from 'react'
import StarsBg from '../../StarsBg'
import BottomBars from '../../BottomBars'
import Spacecraft from '../../Spacecraft'
import AboutusImg from '../../../Images/aboutusnoglow-removebg-preview.png'
import styles from './AboutPecfest1.module.css'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-train-station.css'

const AboutPecfest1 = () => {

  const [odometerValue,setov]=useState([]);
  useEffect(()=>{
      var odometerValues = [50000,8000,43000,1400];
      setov(odometerValues);
    },[]);
  return (
    <div className="text-white w-100 h-100 overflow-hidden position-relative">
      <StarsBg />
      <div
        className={`w-100 h-100 ${styles['content-container']} d-flex flex-column align-items-center justify-content-between`}>
        <div className={styles['text-container']}>
          PECFEST, one of the biggest techno-cultural fests of India,
          aims to inculcate a culture of passion and enthusiasm at the global level.
          It is a perfect brew of culture and technology, in the heart of North India.
        </div>
        <img src={AboutusImg} alt="About Us" className={styles['img-container']} />
      </div>

      <div style={{left:"20%", top:"40%"}} className={` position-absolute  ${styles['odometer']}`}>
        Footfall
        <div className="d-flex justify-content-center align-items-center">
        <Odometer
                    format="d"
                    duration={ 1000 }
                    value={ odometerValue[0] }
          />+
          </div>
      </div>
      <div style={{right:"20%",top:"40%"}} className={`position-absolute right-50 ${styles['odometer']}`}>
        Participants
        <div className='d-flex justify-content-center align-items-center'>
        <Odometer
                    format="d"
                    duration={ 400 }
                    value={ odometerValue[1] }
          />+
        </div>
        
      </div>
      <div style={{left:"10%",top:"60%"}}  className={` position-absolute ${styles['odometer']}`}>
        Facebook
        <div className='d-flex justify-content-center align-items-center'>
        <Odometer
                    format="d"
                    duration={ 800 }
                    value={ odometerValue[2] }
          />+
          </div>
      </div>
      <div style={{right:"10%",top:"60%"}} className={` position-absolute ${styles['odometer']}`}>
        Youtube
        <div className='d-flex justify-content-center align-items-center'>
        <Odometer
                    format="d"
                    duration={ 200 }
                    value={ odometerValue[3] }
          />+
          </div>
      </div>

      <div className={`w-100 position-absolute bottom-0 start-0 ${styles['bars-container']}`}>
        <BottomBars />
      </div>
      <div className={`position-absolute bottom-0 start-100 ${styles.spacecraft}`}>
        <Spacecraft />
      </div>
    </div>
  )
}

export default AboutPecfest1