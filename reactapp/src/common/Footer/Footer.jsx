import React from "react";
import styles from "./Footer.module.css";
import imageicon from "../../assets/images/home12IconLarge.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <img src={imageicon} alt="" srcset="" className={styles.footicon} />
      </div>
      <div className={styles.footerSections}>
        <h4 className={styles.headingText}>Home</h4>
        <h4 className={styles.headingText}> About us</h4>
        <h4 className={styles.headingText}>Café & Pizzeria</h4>
      </div>
      <div className={styles.footerSections}>
      
        <h4 className={styles.headingText}> Collection Management</h4>
        <h4 className={styles.headingText}>Events</h4>
        <h4 className={styles.headingText}>Gallery</h4>
        <h4 className={styles.headingText}>Merch</h4>
      </div>
      <div className={styles.footerSections}>
       
      </div>
    </div>
  );
};

export default Footer;
