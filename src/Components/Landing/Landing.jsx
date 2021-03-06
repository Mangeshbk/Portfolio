import React from "react";
import styles from "./Landing.module.css";
import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <div className={styles.full}>
      <motion.div
        className={styles.name}
        initial={{ y: -300 }}
        animate={{ y: 150 }}
        transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
      >
        Hi, I'm Mangesh Landge
      </motion.div>
      <motion.div
        className={styles.name}
        initial={{ y: -500 }}
        animate={{ y: 180 }}
        transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100 }}
      >
        Full Stack Web Developer.
      </motion.div>
      <motion.div
        className={styles.contactme}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 300 }}
        transition={{ delay: 4 }}
      >
        <div>
          <img
            alt="location"
            src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png"
          />
          <div>Bidar, India</div>
        </div>

        <div>
          <img
            alt="phone"
            src="https://cdn3.iconfinder.com/data/icons/communication-1/100/phone-128.png"
          />
          <div>+91 8904215622</div>
        </div>

        <div>
          <img
            alt="email"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
          />
          <div>mangeshbkwsu@gmail.com</div>
        </div>

        <div>
          <img
            alt="resume"
            src="https://static.thenounproject.com/png/202530-200.png"
          />
          <a href="">View full resume</a>
        </div>
      </motion.div>
    </div>
  );
};
