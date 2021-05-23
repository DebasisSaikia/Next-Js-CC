import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_datas = [
  {
    id: "m1",
    title: "A first MeetUp",
    image:
      "https://images.unsplash.com/photo-1621570170764-306af40c39eb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "Good Address",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A first MeetUp",
    image:
      "https://images.unsplash.com/photo-1621570170764-306af40c39eb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "Good Address",
    description: "This is first meetup",
  },
  {
    id: "m3",
    title: "A first MeetUp",
    image:
      "https://images.unsplash.com/photo-1621570170764-306af40c39eb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "Good Address",
    description: "This is first meetup",
  },
];

const Home = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy_datas,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: Dummy_datas,
//     },
//   };
// }

export default Home;
