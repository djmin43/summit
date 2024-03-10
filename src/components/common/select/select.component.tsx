import React, { ForwardedRef, forwardRef } from "react";
import styles from "./select.module.scss";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionElement[];
};

export type OptionElement = {
  id: string;
  label: string;
  value: number;
};

export const Select = forwardRef(
  (
    { options, ...props }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <select className={styles.select} ref={ref} {...props}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = "Select";
