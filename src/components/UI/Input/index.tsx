import React from "react";
import styles from "./page.module.css";

interface InputProps {
    label: string;
    password?: boolean;
}

export default function Index(props:InputProps){

    const [show, setShow] = React.useState(true);
    const { password } = props
    return (
      <div className={styles.input_layer}>
        <input
          className={styles.input}
          required={true}
          type={ show&&password ? "password" : "text"}
          name="text"
        />
        <label className={styles.label}>
          <div>
            {props.label.split("").map((item: string, index: number) => {
              return (
                <span
                  key={item + index}
                  className={styles.span}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </label>
        {props.password && (
          <span
            onClick={() => setShow(!show)}
            style={{
              display: "flex",
              cursor: "pointer",
              height: "2rem",
              width: "5rem",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* { CloseEve() } */}
            <div>{show ? "Show" : "Hide"}</div>
          </span>
        )}
      </div>
    );
}