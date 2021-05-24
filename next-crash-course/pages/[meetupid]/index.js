import { MongoClient } from "mongodb";
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
  const client = await MongoClient.connect(
    "mongodb+srv://deb123:Debasis12345@cluster0.v5czl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://deb123:Debasis12345@cluster0.v5czl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupid });
  client.close();

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
