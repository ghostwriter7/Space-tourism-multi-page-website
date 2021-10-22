import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
          <Route exact path="/crew">
            <Crew />
          </Route>
          <Route exact path="/technology">
            <Technology />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
