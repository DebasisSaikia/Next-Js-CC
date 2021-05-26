import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "./meetuplist.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
