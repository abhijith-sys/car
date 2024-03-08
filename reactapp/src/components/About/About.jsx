import React from "react";
import styles from "./About.module.css";

import image1 from "../../assets/images/aboutCar2.png";
import image2 from "../../assets/images/aboutImage2.png";
import arrowIcon from "../../assets/images/arraowIcon.png";
import Aboutsub from "../AboutSub/Aboutsub";

export const About = () => {
  return (
    <>
     <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <img
          src={image1}
          alt="imagecar"
          srcset=""
          className={styles.topImage}
        />
        <img
          src={image2}
          alt="imagecar"
          srcset=""
          className={styles.bottomImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.textContainerHeading}>WELCOME TO FLAT 12</h3>
        <p className={styles.textDetails}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl
          congue, venenatis dui ac, varius felis. Aliquam justo metus, molestie
          ac sollicitudin id, mollis sed ligula. Aenean eget fermentum nibh.
          Praesent dictum neque ipsum, vel aliquet nunc vulputate blandit.
          Suspendisse tempor nunc non ante fringilla, eget mattis urna
          imperdiet. Maecenas imperdiet, elit non tincidunt commodo, risus nulla
          semper mi, eget gravida enim justo et liberoLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam id nisl congue, venenatis dui
          ac, varius felis. Aliquam justo metus, molestie ac sollicitudin id,
          mollis sed ligula. Aenean eget fermentum nibh. Praesent dictum neque
          ipsum, vel aliquet nunc vulputate blandit. Suspendisse tempor nunc non
          ante fringilla, eget mattis urna imperdiet. Maecenas imperdiet, elit
          non tincidunt commodo, risus nulla semper mi, eget gravida enim justo
          et libero
        </p>

        <div className={styles.readMoreBtn}>
          <h6 className={styles.readMoreBtnText}> READ MORE</h6>

          <img src={arrowIcon} alt="" srcset="" className={styles.arrowIcon} />
        </div>
      </div>
    </div>
    <Aboutsub />
    </>
   

    
  );
};
