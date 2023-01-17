import React from "react";
import styles from "./Alert.module.scss";

type AlertProps = {
  type: "info" | "danger";
  message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
