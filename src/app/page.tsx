import styles from "./app.module.scss";
import { LandingHome } from "@/components/landing/landing-home.component";
import { Testimonial } from "@/components/landing/testimonial.component";
export default function Home() {
  return (
    <main className={styles.main}>
      <LandingHome />
      <Testimonial />
    </main>
  );
}
