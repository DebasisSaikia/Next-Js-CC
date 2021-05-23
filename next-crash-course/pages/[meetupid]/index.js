import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        image="https://images.unsplash.com/photo-1603868947885-7e39010d088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        title="First meetup"
        address="Meetup city"
        description="Description of meetup"
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;

  return {
    props: {
      meetupData: {
        id: meetupid,
        image:
          "https://images.unsplash.com/photo-1603868947885-7e39010d088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        title: "First meetup",
        address: "Meetup city",
        description: "Description of meetup",
      },
    },
  };
}

export default MeetupDetails;
