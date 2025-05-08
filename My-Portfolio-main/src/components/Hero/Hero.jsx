import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello, <br />
          I'm Raj Tiwari
        </h1>
        <p className={styles.description}>
          Creative Full Stack Developer transforming caffeine and code into
          sleek, high-performing web applications with Java, Spring Boot, and
          React.js.
          <br /> Reach out if you'd like to learn more !!!
        </p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.contactBtn}
            href="mailto:2003rajtiwari@gmail.com"
          >
            Contact Me
          </a>
          <a className={styles.resumeBtn} href="Raj_Tiwari_Resume.pdf">
            Resume
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/rajcartoonimg.png")}
        alt=""
      />
      <div className={styles.topBlur} />
      <div className={styles.BottomBlur} />
    </section>
  );
};
