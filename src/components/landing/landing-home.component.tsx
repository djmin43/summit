import styles from "./landing-home.module.scss";
import React from "react";
import Idea from "@/assets/illustrations/idea.svg";
import { routes } from "@/constants/routes";
import { NavigationButton } from "@/components/common/navigation-button/navigation-button.componet";

export const LandingHome = () => {
  return (
    <section className={styles.landingHomeContainer}>
      <div className={styles.landingDescriptionContainer}>
        <h3 className={styles.landingTitle}>Summit</h3>
        <p className={styles.landingDescription}>
          We bring sustainable and scalable solutions to your doorstep.
        </p>
        <div className={styles.landingButtonContainer}>
          <NavigationButton href={routes.contact} buttonType="primary">
            Consult for free
          </NavigationButton>
          <NavigationButton
            href={`${routes.index}/#testimonials`}
            buttonType="secondary"
          >
            Learn more
          </NavigationButton>
        </div>
      </div>
      <div className={styles.landingIllustrationContainer}>
        <Idea />
      </div>
    </section>
  );
};
