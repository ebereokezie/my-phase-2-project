import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Lakers from "./Lakers";


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
      </Switch>
    </div>
  );
}

export default App;
