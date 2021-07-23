import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.contactme}>
      <div className={styles.name}> Contact Me </div>
      <div className={styles.contact}>
        <div>
          <img
            alt="github"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          />
          <a href="https://github.com/Mangeshbk">Github</a>
        </div>
        <div>
          <img
            alt="linkedin"
            src="https://image.flaticon.com/icons/png/512/61/61109.png"
          />
          <a href="https://www.linkedin.com/in/mangesh-landge-458315166/">
            LinkedIn
          </a>
        </div>
        <div>
          <img
            alt="twitter"
            src="https://image.flaticon.com/icons/png/512/23/23931.png"
          />
          <a href="https://twitter.com/mangesh_bk">Twitter</a>
        </div>
        <div>
          <img
            alt="facebook"
            src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"
          />
          <a href="https://www.facebook.com/Mangesh.Bk.1996">Facebook</a>
        </div>
      </div>
    </div>
  );
};
