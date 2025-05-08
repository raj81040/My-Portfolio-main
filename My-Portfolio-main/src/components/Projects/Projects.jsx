import React from 'react'
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';
import styles from "./Projects.module.css";
export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((project,id)=>{
            return <div key={id} className={styles.project}>
              <img src={getImageUrl(project.imageSrc)} alt={`${project.title}`}  className={styles.image}/>
              <h3 className={styles.projecttitle}>{project.title}</h3>
              <p className={styles.projectdescription}>{project.description}</p>
              <ul className={styles.skills}>
                {
                  project.skills.map((skill,id)=>{
                    return <li className={styles.skill} key={id}>{skill}</li>
                  })
                }
              </ul>
              <div className={styles.links}>
                <a href={project.source} className={styles.link}>Source Code</a>
              </div> 
            </div>
          })
        }
      </div>
    </section>
  )
}
