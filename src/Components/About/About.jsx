import React from "react";
import styles from "./About.module.css";
import self from "../../Images/pic.jpeg";

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.btm}>
        <div className={styles.left}>
          <div className={styles.head}>About Me</div>
          <div className={styles.vice}>
            I like to think of myself as a designer/developer hybrid - a unicorn
            with excellent people skills.
          </div>
          <div className={styles.text}>
            Always eager to learn new skills and explore efficient ways of
            solving problems. Enthusiastic to start a career in an existing tech
            company that allows growth and continued learning.
          </div>
          <div className={styles.text}>
            I just graduated from the Full Stack Developer Bootcamp from Masai
            School and I am now looking for my first full time development role
            with room to grow and learn. I find the creativity and visual
            aspects of Frontend and Backend very interesting and would love the
            opportunity to grasp more about Web Development.
          </div>
          <div className={styles.extra}>
            I love coding, traveling, farming, and to listen flute music.
          </div>
        </div>
        <div className={styles.right}>
          <img alt="self" src={self} />
        </div>
      </div>
    </div>
  );
};
