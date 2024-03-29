import styles from "./navigation-bar.module.scss";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";
import { HamburgerMenu } from "@/components/navigation-bar/hamburger-menu/hamburger-menu.component";
import { Logo } from "@/components/common/logo/logo.component";

export const NavigationBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <Logo />
      <HamburgerMenu />
      <section className={styles.navigationLinkContainer}>
        <NavigationLink href={routes.index}>home</NavigationLink>
        <NavigationLink href={routes.about}>about</NavigationLink>
        <NavigationLink href={routes.portfolio}>portfolio</NavigationLink>
        <NavigationLink href={routes.contact}>contact</NavigationLink>
      </section>
    </nav>
  );
};
