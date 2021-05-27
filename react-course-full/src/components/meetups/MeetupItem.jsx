import React, { useContext } from "react";
import FavoritesContext from "../../store/fav-context";
import Card from "../utils/Card";
import styles from "./meetupitem.module.css";

const MeetupItem = ({ image, title, address, description, id }) => {
  const favoritesCTX = useContext(FavoritesContext);
  const itemIsFav = favoritesCTX.itemIsfavorite(id);

  const toggleFav = () => {
    // if (itemIsFav) {
    //   favoritesCTX.removeFavorite(id);
    // } else {
    //   favoritesCTX.addFavorite({
    //     image,
    //     title,
    //     address,
    //     description,
    //     id,
    //   });
    // }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleFav}>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
