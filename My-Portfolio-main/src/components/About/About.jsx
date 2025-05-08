import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/boyusinglaptop.png")}
          alt="about imag"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="no available" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                I am Frontend developer with experience of developing responsive
                websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="no available" />
            <div className={styles.aboutItemText}>
              <h3>BackEnd Developer</h3>
              <p>
                I have Experience developing fast and optimised backend systems
                and APIs{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
