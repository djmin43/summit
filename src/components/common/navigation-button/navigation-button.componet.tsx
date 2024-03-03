import styles from "./navigation-button.module.scss";
import {
  NavigationLink,
  NavigationLinkProps,
} from "@/components/common/navigation-link/navigation-link.component";
import classNames from "classnames";

export type NavigationButtonProps = NavigationLinkProps & {
  customClass?: string;
  buttonType: ButtonType;
};

type ButtonType = "primary" | "secondary";

export const NavigationButton = ({
  href,
  customClass,
  buttonType,
  children,
  ...props
}: NavigationButtonProps) => {
  return (
    <NavigationLink
      href={href}
      customClass={classNames(styles.button, styles[buttonType], customClass)}
      {...props}
    >
      {children}
    </NavigationLink>
  );
};
