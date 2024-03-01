import styles from "./navigation-bar.module.scss";
import classNames from "classnames";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
export const NavigationBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <span className={classNames(styles.title)}>Summ(i:T)</span>
      <NavigationLink href={"/"}>home</NavigationLink>
      <NavigationLink href={"/about"}>about</NavigationLink>
      <NavigationLink href={"/portfolio"}>portfolio</NavigationLink>
      <NavigationLink href={"/contact"}>contact</NavigationLink>
    </nav>
  );
};
