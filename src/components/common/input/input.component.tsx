import styles from "./input.module.scss";
import React, { ForwardedRef, forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef(
  ({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} className={styles.input} {...props} />;
  },
);

Input.displayName = "Input";
