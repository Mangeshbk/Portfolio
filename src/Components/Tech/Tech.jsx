import React from "react";
import styles from "./Tech.module.css";
import redux from "../../Images/redux.png";

export const Tech = () => {
  return (
    <div id="skills">
      <div className={styles.skills}>
        <div className={styles.name}>Tech Stack</div>
        <div className={styles.bottom}>
          <div className={styles.box}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png"
              alt="html"
            />
            <div> HTML </div>
          </div>
          <div className={styles.box}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"
              alt="css"
            />
            <div> CSS </div>
          </div>
          <div className={styles.box}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
              alt="js"
            />
            <div> JavaScript </div>
          </div>
          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://cdn.svgporn.com/logos/react.svg"
              alt="react"
            />
            <div> React </div>
          </div>
          <div className={styles.box}>
            <img className={styles.img} src={redux} alt="redux" />
            <div> Redux </div>
          </div>
          <div className={styles.box}>
            <img
              src="https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript-thumbnail.png"
              alt="mongoDB"
            />
            <div> MongoDB </div>
          </div>
          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              alt="nodeJS"
            />
            <div> NodeJS </div>
          </div>

          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
            />
            <div> Postman </div>
          </div>

          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://material-ui.com/static/logo.png"
              alt="materiUI"
            />
            <div> material UI </div>
          </div>

          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://iconape.com/wp-content/png_logo_vector/git-icon.png"
              alt="Git"
            />
            <div> Git </div>
          </div>
        </div>
      </div>
    </div>
  );
};
