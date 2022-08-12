import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  deleteFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    deleteFavorite: deleteFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  function addFavoriteHandler(favorite) {
    setUserFavorites((previousUserFavorites) =>
      previousUserFavorites.concat(favorite)
    );
  }

  function deleteFavoriteHandler(meetupId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((el) => el.id !== meetupId);
    });
  }

  function isFavoriteHandler(meetupId) {
    return userFavorites.some((el) => el.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
