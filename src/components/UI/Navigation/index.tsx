"use client";
import React from "react";
import styles from "./page.module.css";
import { Button } from "../index";


interface NavigationItemProps {
  label: string; 
  key: any
}

interface NavigationProps {
  items:Array<NavigationItemProps>;
}

export default function index(props:NavigationProps) {
  const [key, setKey] = React.useState<Number>(0);

  return (
    <div className={styles.navigation_layer}>
      <div className={styles.navigation}>
        <div className={styles.head}>UI Components</div>
        {
          props.items.map((i)=>{
            return <button
            onClick={() => {
              setKey(i.key);
            }}
            className={key === i.key ? styles.on_btn : styles.btn}
          >
            {i.label}
          </button>
          })
        }
        {/* <button
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
        <button
          onClick={() => {
            setKey(2);
          }}
          className={key === 2 ? styles.on_btn : styles.btn}
        >
          Icon
        </button> */}
      </div>
    </div>
  );
}
