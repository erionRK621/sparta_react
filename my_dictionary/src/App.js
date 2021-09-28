import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "./redux/modules/word";
import { db } from "./firebase";

import AddWord from "./AddWord";
import Wordlist from "./Wordlist";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

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
