import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import AddWord from "./AddWord";
import Wordlist from "./Wordlist";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Wordlist />
      </Route>

      <Route path="/word" exact>
        <AddWord />
      </Route>
    </div>
  );
}

export default App;
