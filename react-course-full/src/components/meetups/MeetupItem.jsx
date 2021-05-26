import React from "react";
import Card from "../utils/Card";
import styles from "./meetupitem.module.css";

const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className={styles.item}>
      <Card>
        <div>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>

        <div className={styles.actions}>
          <button>To Favourates</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
