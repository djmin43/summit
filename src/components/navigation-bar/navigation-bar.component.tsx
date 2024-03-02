"use client";

import styles from "./navigation-bar.module.scss";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";
import Hamburger from "@material-design-icons/svg/outlined/menu.svg";
import Close from "@material-design-icons/svg/outlined/close.svg";
import { useToggle } from "@/hooks/use-toggle";

export const NavigationBar = () => {
  const hamburgerMenu = useToggle();
  return (
    <nav className={styles.navigationContainer}>
      <span className={styles.title}>Summ(i:T)</span>
      {hamburgerMenu.isOpen ? (
        <button onClick={hamburgerMenu.close}>
          <Close />
        </button>
      ) : (
        <button onClick={hamburgerMenu.open}>
          <Hamburger />
        </button>
      )}
      <div className={styles.navigationLinkContainer}>
        <NavigationLink href={routes.index}>home</NavigationLink>
        <NavigationLink href={routes.about}>about</NavigationLink>
        <NavigationLink href={routes.portfolio}>portfolio</NavigationLink>
        <NavigationLink href={routes.contact}>contact</NavigationLink>
      </div>
    </nav>
  );
};
