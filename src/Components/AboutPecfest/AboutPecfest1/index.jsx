import React from 'react'
import StarsBg from '../../StarsBg'
import BottomBars from '../../BottomBars'
import Spacecraft from '../../Spacecraft'
import AboutusImg from '../../../Images/aboutusImg.png'
import styles from './AboutPecfest1.module.css'

const AboutPecfest1 = () => {
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