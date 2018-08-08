import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import TabsPage from "../components/TabsPage";
import Friends from "../components/Friends";
import LandingPage from "../components/LandingPage";
import { BrowserRouter } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/friends" component={Friends} />
      <Route path="/colleges" component={TabsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
