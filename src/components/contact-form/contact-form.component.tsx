import styles from "./contact-form.module.scss";
import React from "react";
import { Input } from "@/components/common/input/input.component";

export const ContactForm = () => {
  return (
    <form className={styles.formContainer}>
      <div>
        <label htmlFor="name">name</label>
        <Input id="name" placeholder="Name" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
