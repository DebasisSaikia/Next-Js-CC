import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsfavorite: (meetupId) => {},
});

export const ContextProvider = ({ children }) => {
  const [userFav, setUserfav] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserfav((prevUserFav) => {
      return prevUserFav.concat(favoriteMeetup);
    });
  };

  const removeFav = (meetupId) => {
    setUserfav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemisFav = (meetupId) => {
    return userFav.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFav,
    itemIsfavorite: itemisFav,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
