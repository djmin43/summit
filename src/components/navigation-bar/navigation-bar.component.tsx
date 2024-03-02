"use client";

import styles from "./navigation-bar.module.scss";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";
import Hamburger from "@material-design-icons/svg/outlined/menu.svg";

export const NavigationBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <span className={styles.title}>Summ(i:T)</span>
      <Hamburger />
      <div className={styles.navigationLinkContainer}>
        <NavigationLink href={routes.index}>home</NavigationLink>
        <NavigationLink href={routes.about}>about</NavigationLink>
        <NavigationLink href={routes.portfolio}>portfolio</NavigationLink>
        <NavigationLink href={routes.contact}>contact</NavigationLink>
      </div>
    </nav>
  );
};
