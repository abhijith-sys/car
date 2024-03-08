import React from 'react';
import styles from "./Home.module.css";
import Header from '../../common/Header/Header';
import homeImage from "../../assets/images/home12IconLarge.png"

export const Home = () => {
 return (
    <div className={styles.homeContainer} >
        <Header/>
        <div className={styles.homeImageContainer}>
        <img src={homeImage} alt="icon" className={styles.homeImg} /> 
        </div>
    </div>
  )
}
