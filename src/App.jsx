import React from "react";
import Home from "./components/Home";
import AddListing from "./components/AddListing";

import "./App.css";

import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <AddListing path="/addlisting" />
      </Router>
    </div>
  );
}

export default App;
