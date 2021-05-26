import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMeetup from "./components/AllMeetup";
import NewMeetup from "./components/NewMeetup";
import Favorites from "./components/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route exact path="/" component={AllMeetup} />
        <Route exact path="/new-meetup" component={NewMeetup} />
        <Route exact path="fav" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
