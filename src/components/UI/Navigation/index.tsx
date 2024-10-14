'use client'
import React from "react";
import styles from "./page.module.css";
import { Button } from "../index";

export default function index() {

  const [key, setKey] = React.useState<Number>();

  return (
    <div className={styles.navigation}>
      <div className={styles.head}>UI Components</div>
      <button
        className={key===0?styles.on_item:styles.item}
        onClick={() => {
          setKey(0);
        }}
      >
        Input
      </button>
      <button
        className={key===1?styles.on_item:styles.item}
        onClick={() => {
          setKey(1);
        }}
      >
        Button
      </button>
    </div>
  );
}
