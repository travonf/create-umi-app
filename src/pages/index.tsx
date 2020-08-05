import React from "react";
import Logo from "../../public/assets/react.svg";
import styles from "./style.less";

export default () => (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={Logo} alt="logo" />
  </div>
);
