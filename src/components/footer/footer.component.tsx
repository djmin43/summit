import styles from "./footer.module.scss";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";
import { Logo } from "@/components/common/logo/logo.component";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerNavigationContainer}>
        <NavigationLink href={routes.index}>home</NavigationLink>
        <NavigationLink href={routes.about}>about</NavigationLink>
        <NavigationLink href={routes.portfolio}>portfolio</NavigationLink>
        <NavigationLink href={routes.contact}>contact</NavigationLink>
      </div>
      <div className={styles.footerLogoContainer}>
        <Logo />
        <span className={styles.copyright}>
          © 2024-present Summit. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
