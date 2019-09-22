import React from "react";
import PropTyles from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed}></Route>
    <Route path="/explore" component={Explore}></Route>
    <Route path="/search" component={Search}></Route>
    <Route path="/:username" component={Profile}></Route>
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth}></Route>
  </Switch>
);
const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
AppRouter.prototypes = {
  isLoggedIn: PropTyles.bool.isRequired
};

export default AppRouter;
