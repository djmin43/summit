import styles from "./navigation-bar.module.scss";
import classNames from "classnames";
export const NavigationBar = () => {
  return (
    <nav>
      <span className={classNames(styles.title)}>Summ(i:T)</span>
    </nav>
  );
};
