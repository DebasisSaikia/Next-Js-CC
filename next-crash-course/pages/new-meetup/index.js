import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enterMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add New meetup</title>
        <meta name="description" content="Add your own meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUpPage;
