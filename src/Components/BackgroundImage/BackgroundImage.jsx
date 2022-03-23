import React from 'react'
import styles from './BackgroundImage.module.css'

const BackgroundImage = ({children, color}) => {
  return (
    <div className={styles.main_bg} style={{backgroundColor: color}}>
      {children}
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
    </div>
  )
}

export default BackgroundImage