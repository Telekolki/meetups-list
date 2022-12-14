import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  let isItemFavorite = favoritesCtx.isFavorite(props.id);

  const onFavoritesClickHandler = () => {
    isItemFavorite
      ? favoritesCtx.deleteFavorite(props.id)
      : favoritesCtx.addFavorite({
          id: props.id,
          image: props.image,
          title: props.title,
          address: props.address,
          description: props.description,
        });
    console.log(favoritesCtx);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onFavoritesClickHandler}>
            {isItemFavorite ? 'Delete from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
