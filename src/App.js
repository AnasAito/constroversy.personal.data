import React from "react";
import Landing from "./views/Landing/index";
import Profile from "./views/axe";
import Tab from "./components/tab";
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
        <Route path="/test">
          <div className="m-10">
            <Tab color="pink" />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
