import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetaupsPage from "./pages/AllMeetaps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <AllMeetaupsPage />
        </Route>
        <Route path={"/new-meetup"}>
          <NewMeetupPage />
        </Route>
        <Route path={"/favorites"}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
