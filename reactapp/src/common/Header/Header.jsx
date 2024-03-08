import React from "react";
import styles from "./Header.module.css";

import headerIcon from "../../assets/images/home12IconLarge.png";
import SocialIcons from "../SocialIcons/SocialIcons";

const Header = () => {
  return (
    <div className={styles.headerContiner}>
      <img src={headerIcon} alt="icon" className={styles.headerIcon} />

      <div className={styles.navHeadings}>
        <h4 className={styles.headingText}>Home</h4>
        <h4 className={styles.headingText}> About us</h4>
        <h4 className={styles.headingText}>Café & Pizzeria</h4>
        <h4 className={styles.headingText}> Collection Management</h4>
        <h4 className={styles.headingText}>Events</h4>
        <h4 className={styles.headingText}>Gallery</h4>
        <h4 className={styles.headingText}>Contact</h4>
      </div>

      <SocialIcons />
    </div>
  );
};

export default Header;
