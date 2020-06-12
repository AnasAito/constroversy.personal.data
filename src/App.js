import React from "react";
import Landing from "./views/Landing/index";
//import Profile from "./views/axe";
import Tab from "./components/tab";
import Inter from "./views/Inter";
import Axe from "./views/Axe/index";
import Us from "./views/us";
import Refs from "./views/refs";
import Anexe from "./views/anexe";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/inter/:id" component={Inter} />
        <Route path="/axe/:id" component={Axe} />
        <Route path="/us" component={Us} />
        <Route path="/refs" component={Refs} />
        <Route path="/annexe" component={Anexe} />
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
