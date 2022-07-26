import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Lakers from "./Lakers";
import Celtics from "./Celtics";
import Rockets from "./Rockets";
import HallOfFame from "./HallOfFame";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/lakers">
          <Lakers />
        </Route>
        <Route path = "/rockets">
          <Rockets />
        </Route>
        <Route path = "/celtics">
          <Celtics />
        </Route>
        <Route path = "/halloffame">
          <HallOfFame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
