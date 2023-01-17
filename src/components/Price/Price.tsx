import React from "react";
import styles from "./Price.module.scss";

type PriceProps = {
  size?: "s" | "m";
  amount?: string;
  decimals?: string;
  free?: boolean;
};

export const Price: React.FC<PriceProps> = (props) => {
  return (
    <div className={styles.price + " " + styles[props.size ?? "s"]}>
      {props.amount && <span className={styles.amount}>{props.amount}</span>}

      {props.decimals && (
        <span className={styles.decimals}>{props.decimals}</span>
      )}

      {props.free && <span className={styles.free}></span>}
    </div>
  );
};
