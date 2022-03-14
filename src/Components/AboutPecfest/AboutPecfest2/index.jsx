import React from 'react'
import StarsBg from '../../StarsBg'
import BottomBars from '../../BottomBars'
import Spacecraft from '../../Spacecraft'
import styles from './AboutPecfest2.module.css'

const AboutPecfest2 = () => {
  return (
    <div className="text-white w-100 h-100 overflow-hidden position-relative">
      <StarsBg />


      <div className={`w-100 position-absolute bottom-0 start-0 ${styles['bars-container']}`}>
        <BottomBars />
      </div>
      <div className={`position-absolute bottom-0 start-0 ${styles.spacecraft}`}>
        <Spacecraft />
      </div>
    </div>
  )
}

export default AboutPecfest2