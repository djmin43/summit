import styles from "./logo.module.scss";
import { NavigationLink } from "@/components/common/navigation-link/navigation-link.component";
import { routes } from "@/constants/routes";

export const Logo = () => {
  return (
    <NavigationLink href={routes.index}>
      <span className={styles.logo}>summit</span>
    </NavigationLink>
  );
};
