import React from "react";
import NewMeetupForm from "./meetups/NewMeetupForm";
import { useHistory } from "react-router";

const NewMeetup = () => {
  const history = useHistory();
  const onAddMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-52588-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
