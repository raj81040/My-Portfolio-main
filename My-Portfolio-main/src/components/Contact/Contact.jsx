import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <p>Feel Free to Reach out !!!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:2003rajtiwari@gmail.com">2003rajtiwari@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/in/20003-raj-tiwari/">
            linkedin.com/Raj-Tiwari
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/raj81040/">github.com/Raj Tiwari</a>
        </li>
      </ul>
    </footer>
  );
};
