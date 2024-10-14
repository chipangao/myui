"use client";
import React from "react";
import styles from "./page.module.css";
import { Button } from "../index";

export default function index() {
  const [key, setKey] = React.useState<Number>();

  return (
    <div className={styles.navigation}>
      <div className={styles.head}>UI Components</div>
      <button
        onClick={() => {
          setKey(0);
        }}
        className={key === 0 ? styles.on_btn : styles.btn}
      >
        button 0 
      </button>
      <button
        onClick={() => {
          setKey(1);
        }}
        className={key === 1 ? styles.on_btn : styles.btn}
      >
         button 1
      </button>
    </div>
  );
}
