import styles from "./main-button.module.scss";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type Ref = HTMLButtonElement;
export const MainButton = forwardRef<Ref, MainButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button className={styles.button} {...props}>
        {children}
      </button>
    );
  },
);

MainButton.displayName = "MainButton";
