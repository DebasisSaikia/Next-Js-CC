import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./components/AllMeetup";
import NewMeetup from "./components/NewMeetup";
import Favorites from "./components/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetup} />
        <Route exact path="/new-meetup" component={NewMeetup} />
        <Route exact path="fav" component={Favorites} />
      </Switch>
    </Layout>
  );
}

export default App;
