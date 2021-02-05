import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={(props) => <LoginContainer {...props} />} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
