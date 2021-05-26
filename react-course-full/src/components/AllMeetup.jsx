import React from "react";
import MeetupList from "./meetups/MeetupList";

const dummy_data = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1622039138445-cd76fb19b25d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    address: "Doigrong",
    description: "This is dummy data 1",
    title: "dummy data 1",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    address: "Bangalore",
    description: "This is dummy data 2",
    title: "dummy data 2",
  },
];

const AllMeetup = () => {
  return (
    <section>
      <h1>All meetup</h1>
      <MeetupList meetups={dummy_data} />
    </section>
  );
};

export default AllMeetup;
