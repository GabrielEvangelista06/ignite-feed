import styles from "./Avatar.module.css";

/* eslint-disable react/prop-types */
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
