import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <>
      <h1>Favorites</h1>
      {favoritesCtx.totalFavorites ? (
        <MeetupList meetups={favoritesCtx.favorites} />
      ) : (
        'There are no favorites yet'
      )}
    </>
  );
};

export default FavoritesPage;
