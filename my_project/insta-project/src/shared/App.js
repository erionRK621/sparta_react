import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "../elements";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
