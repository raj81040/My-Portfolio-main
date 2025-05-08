import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyitem, id) => {
            return (
              <li key={id} className={styles.historyitem}>
                <img src={getImageUrl(historyitem.imageSrc)} alt="" />
                <div className={styles.historyitemdetails}>
                  <h3>{`${historyitem.role}, ${historyitem.organisation}`}</h3>
                  <p>{`${historyitem.startDate} - ${historyitem.endDate}`}</p>
                  <ul>
                    {historyitem.experiences.map((experiences, id) => {
                      return <li key={id}>{experiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <h1 className={styles.subtitle}>Programming Languages</h1>
        <div className={styles.skills}>
          {skills[0].programminglanguages.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imagesrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <h1 className={styles.subtitle}>Frameworks & Tools</h1>
        <div className={styles.skills}>
          {skills[1].FrameworksAndTools.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imagesrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <h1 className={styles.subtitle}>Development Tools</h1>
        <div className={styles.skills}>
          {skills[2].DevelopmentTools.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imagesrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <h1 className={styles.subtitle}>Cloud Platforms</h1>
        <div className={styles.skills}>
          {skills[3].CloudPlatforms.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skills.imagesrc)} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
