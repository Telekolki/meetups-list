import { Route, Switch } from 'react-router-dom';
import NavigationBar from './layout/NavigationBar';
import AllMeetaupsPage from './pages/AllMeetaps';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path={'/'} exact>
          <AllMeetaupsPage />
        </Route>
        <Route path={'/new-meetup'}>
          <NewMeetupPage />
        </Route>
        <Route path={'/favorites'}>
          <FavoritesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
