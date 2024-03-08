import React from "react";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.navSocialIcons}>
      <div className={styles.iconfb}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8.224"
          height="15.835"
          viewBox="0 0 8.224 15.835"
        >
          <path
            id="Path_110"
            data-name="Path 110"
            d="M952.407,934h-1.49c-1.169,0-1.4.556-1.4,1.371v1.8h2.787v2.816h-2.786v7.222h-2.907v-7.224h-2.43v-2.814h2.43V935.1a3.392,3.392,0,0,1,3.621-3.721l2.173,0V934Z"
            transform="translate(-944.184 -931.375)"
            fill="#343333"
          />
        </svg>
      </div>
      <div className={styles.iconfb}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.983"
          height="13.798"
          viewBox="0 0 16.983 13.798"
        >
          <path
            id="twitter"
            d="M15.238,5.691a6.95,6.95,0,0,0,1.745-1.807h0a7.271,7.271,0,0,1-2.006.55,3.463,3.463,0,0,0,1.532-1.924,6.966,6.966,0,0,1-2.208.843,3.481,3.481,0,0,0-6.022,2.38,3.585,3.585,0,0,0,.081.794A9.857,9.857,0,0,1,1.182,2.884a3.481,3.481,0,0,0,1.07,4.653A3.441,3.441,0,0,1,.679,7.108v.038a3.5,3.5,0,0,0,2.789,3.421,3.462,3.462,0,0,1-.913.115,3.073,3.073,0,0,1-.659-.059A3.516,3.516,0,0,0,5.15,13.049,7,7,0,0,1,.833,14.533,6.585,6.585,0,0,1,0,14.486a9.8,9.8,0,0,0,5.341,1.562,9.842,9.842,0,0,0,9.9-10.357Z"
            transform="translate(0 -2.25)"
            fill="#343333"
          />
        </svg>
      </div>
      <div className={styles.instaicon}>
        <svg
          id="instagram"
          xmlns="http://www.w3.org/2000/svg"
          width="15.741"
          height="15.741"
          viewBox="0 0 15.741 15.741"
        >
          <g id="Group_6554" data-name="Group 6554">
            <g id="Group_6553" data-name="Group 6553">
              <path
                id="Path_6286"
                data-name="Path 6286"
                d="M10.822,0h-5.9A4.92,4.92,0,0,0,0,4.919v5.9a4.92,4.92,0,0,0,4.919,4.919h5.9a4.92,4.92,0,0,0,4.919-4.919v-5.9A4.92,4.92,0,0,0,10.822,0Zm3.443,10.822a3.447,3.447,0,0,1-3.443,3.443h-5.9a3.447,3.447,0,0,1-3.443-3.443v-5.9A3.447,3.447,0,0,1,4.919,1.476h5.9a3.447,3.447,0,0,1,3.443,3.443Z"
                fill="#343333"
              />
            </g>
          </g>
          <g
            id="Group_6556"
            data-name="Group 6556"
            transform="translate(3.935 3.935)"
          >
            <g id="Group_6555" data-name="Group 6555">
              <path
                id="Path_6287"
                data-name="Path 6287"
                d="M131.935,128a3.935,3.935,0,1,0,3.935,3.935A3.935,3.935,0,0,0,131.935,128Zm0,6.395a2.46,2.46,0,1,1,2.46-2.46A2.463,2.463,0,0,1,131.935,134.395Z"
                transform="translate(-128 -128)"
                fill="#343333"
              />
            </g>
          </g>
          <g
            id="Group_6558"
            data-name="Group 6558"
            transform="translate(11.577 3.116)"
          >
            <g id="Group_6557" data-name="Group 6557">
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="0.524"
                cy="0.524"
                r="0.524"
                fill="#343333"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SocialIcons;
