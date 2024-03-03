import AvatarIcon from "@material-design-icons/svg/filled/account_circle.svg";
import React from "react";
import styles from "./avatar.module.scss";

export type AvatarProps = {
  avatarColor: AvatarColor;
};

export type AvatarColor = "red" | "yellow" | "gray" | "black" | "purple";

export const Avatar = ({ avatarColor }: AvatarProps) => {
  return (
    <div className={`${styles[avatarColor]} ${styles.avatar}`}>
      <AvatarIcon />
    </div>
  );
};
