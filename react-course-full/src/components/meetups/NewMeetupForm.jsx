import React, { useRef } from "react";
import Card from "../utils/Card";
import styles from "./newform.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    const enterTitle = titleRef.current.value;
    const enterImage = imageRef.current.value;
    const enterAddress = addressRef.current.value;
    const enterDescription = descriptionRef.current.value;

    const meetupData = {
      title: enterTitle,
      image: enterImage,
      address: enterAddress,
      description: enterDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" name="title" id="title" required ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" name="image" id="image" required ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            ref={addressRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            rows="5"
            name="description"
            id="description"
            required
            ref={descriptionRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
