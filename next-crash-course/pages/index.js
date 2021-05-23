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

const Home = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(Dummy_datas);
  }, []);
  return (
    <>
      <MeetupList meetups={loadedMeetups} />
    </>
  );
};

export default Home;
