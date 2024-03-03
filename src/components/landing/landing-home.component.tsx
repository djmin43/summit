import styles from "./landing-home.module.scss";
import React from "react";
import Idea from "@/assets/illustrations/idea.svg";

export const LandingHome = () => {
  return (
    <section className={styles.landingHomeContainer}>
      <div className={styles.landingDescriptionContainer}>
        <h3 className={styles.landingTitle}>Summit</h3>
        <p className={styles.landingDescription}>
          We bring sustainable and scalable solutions to your doorstep.
        </p>
      </div>
      <div className={styles.landingIllustrationContainer}>
        <Idea />
      </div>
    </section>
  );
};
