import styles from "./footer.module.scss";
import { Logo } from "@/components/common/logo/logo.component";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Logo />
    </footer>
  );
};
