"use client";
import styles from "./contact-form.module.scss";
import React from "react";
import { Input } from "@/components/common/input/input.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(4).max(30),
  email: z.string().email(),
  inquiry: z.string().min(1).max(2000),
});

type ContactFormType = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { register } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <form className={styles.formContainer}>
      <div>
        <label htmlFor="name">name</label>
        <Input id="name" placeholder="Name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="name">email</label>
        <Input id="name" placeholder="Email" {...register("name")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
