import { MongoClient } from "mongodb";
import Head from "next/head";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Next Js Meetup</title>
        <meta
          name="description"
          content="This is a demo app built with Next Js, React and Mongo Db"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://deb123:Debasis12345@cluster0.v5czl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
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
