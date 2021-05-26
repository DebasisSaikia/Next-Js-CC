import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/fav">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
