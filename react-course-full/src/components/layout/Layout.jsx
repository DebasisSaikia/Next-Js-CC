import React from "react";
import styles from "./layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
