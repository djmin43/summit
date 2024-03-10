import styles from "./contact.module.scss";
import React from "react";
import { ContactForm } from "@/components/contact-form/contact-form.component";

const ContactPage = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.writeupContainer}>
        <h2 className={styles.title}>
          Let us bring your dreams to your doorstep
        </h2>
        <p className={styles.description}>
          At Summit, we&#39;re here to deliver sustainable and scalable
          solutions right to your doorstep. With our commitment to innovation
          and sustainability, partnering with us means investing in a brighter
          future.
        </p>
        <p className={styles.description}>
          Let&#39;s work together to create lasting impact. Contact us today to
          get started!
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
