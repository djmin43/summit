import styles from "./testimonial.module.scss";
import React from "react";
import { Avatar } from "@/components/common/avatar/avatar.component";
import { testimonials } from "@/constants/testimonials";

export const Testimonial = () => {
  return (
    <section className={styles.testimonialsContainer} id="testimonials">
      <h3 className={styles.title}>What our clients say</h3>
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className={styles.testimonialContainer}>
          <p className={styles.description}>
            &#34;{testimonial.description}&#34;
          </p>
          <div className={styles.avatarContainer}>
            <Avatar avatarColor={testimonial.avatarColor} />
            <div className={styles.personContainer}>
              <p className={styles.name}>{testimonial.name}</p>
              <span className={styles.position}>{testimonial.position}</span>
              <span className={styles.company}>{testimonial.company}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
