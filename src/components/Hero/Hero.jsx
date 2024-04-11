import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Ganesh Gaikwad</h1>
        <p className={styles.description}>
          I am Full Stack Developer with over 8.9 years of proven expertise in
          designing, developing, and implementing innovative web applications
          and solutions. Proficient in utilizing a diverse range of technologies
          and programming languages to create intuitive user interfaces. Seeking
          to apply extensive development experience to excel in a dynamic role
          as a UI Developer, where I can contribute to cutting-edge projects and
          drive impactful results.
        </p>
        <a href="mailto:ganeshitg904@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Ganesh.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
