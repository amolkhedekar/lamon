import React from "react";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <div className="app__home">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
