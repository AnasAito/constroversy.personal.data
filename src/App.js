import React from "react";
import Landing from "./views/Landing/index";
import Profile from "./views/axe";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/axe">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
