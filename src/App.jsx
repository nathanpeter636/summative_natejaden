import React from "react";
import Home from "./components/Home";
import AddListing from "./components/AddListing";
import ViewListing from "./components/ViewListing";
import ViewFood from "./components/ViewFood";
import ViewItems from "./components/ViewItems";

import "./App.css";

import { Router } from "@reach/router";


function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <AddListing path="/addlisting" />
        <ViewListing path="/view-listing-details/:id"/>
        <ViewFood path="/view-food/"/>
        <ViewItems path="/view-items"/>

      </Router>
    </div>
  );
}

export default App;
