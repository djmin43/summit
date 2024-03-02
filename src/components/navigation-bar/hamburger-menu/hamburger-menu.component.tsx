"use client";

import React from "react";
import { useToggle } from "@/hooks/use-toggle";
import Close from "@material-design-icons/svg/outlined/close.svg";
import Hamburger from "@material-design-icons/svg/outlined/menu.svg";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";
import styles from "./hamburger-menu.module.scss";
import classNames from "classnames";

export const HamburgerMenu = () => {
  const hamburgerMenu = useToggle();
  return (
    <section className={styles.hamburgerContainer}>
      <button onClick={hamburgerMenu.open}>
        <Hamburger />
      </button>
      <div
        className={classNames(
          styles.navigationLinkContainer,
          !hamburgerMenu.isOpen && styles.isClosed,
        )}
        onClick={hamburgerMenu.close}
      >
        <div className={styles.closeButtonContainer}>
          <button onClick={hamburgerMenu.close}>
            <Close />
          </button>
        </div>
        <div className={styles.navigationLinkList}>
          <NavigationLink href={routes.index}>home</NavigationLink>
          <NavigationLink href={routes.about}>about</NavigationLink>
          <NavigationLink href={routes.portfolio}>portfolio</NavigationLink>
          <NavigationLink href={routes.contact}>contact</NavigationLink>
        </div>
      </div>
    </section>
  );
};
