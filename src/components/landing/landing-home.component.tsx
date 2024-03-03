import styles from "./landing-home.module.scss";
import React from "react";

export const LandingHome = () => {
  return (
    <section className={styles.landingHomeContainer}>
      <h3 className={styles.landingTitle}>Summit</h3>
      <p className={styles.landingDescription}>
        We bring sustainable and scalable solutions to your doorstep.
      </p>
    </section>
  );
};
