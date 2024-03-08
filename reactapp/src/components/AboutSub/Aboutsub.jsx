import React from 'react'
import styles from "./AboutSub.module.css";
import car from "../../assets/images/car.png";
import textImage from "../../assets/images/textimage.png"
const Aboutsub = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftImageContainer} >
        <img src={car} alt="" srcset="" className={styles.carImage} />
      </div>       
         <img src={textImage} alt="" srcset=""  className={styles.textImage} />
    </div>
  )
}

export default Aboutsub