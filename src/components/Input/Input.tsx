import React from "react";
import styles from "./Input.module.scss";
import icon from "./search.svg";

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  maxLength: number;
  value: string;
  onChange: (v: string) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        autoComplete="off"
        autoCorrect="off"
        required
        onChange={(e) => props.onChange(e.target.value)}
      />
      <button type="submit">
        <img src={icon} alt="Icono de busqueda" />
      </button>
    </div>
  );
};

export default Input;
