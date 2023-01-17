import React from "react";
import styles from "./Header.module.scss";
import logo from "./logo.png";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" title="Mercado Libre">
          <img src={logo} alt="Logo Mercado Libre" />
        </a>
        <div className={styles.form}>{children}</div>
      </div>
    </header>
  );
};

export default Header;
