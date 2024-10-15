import React from "react";
import styles from "./page.module.css";

interface ButtonProps {
  color?: string;
  children?: React.ReactNode;
}

export default function Index(props: ButtonProps) {
  return <button className={styles.btn_85}>{props.children}</button>;
}
