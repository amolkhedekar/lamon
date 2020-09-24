import React from "react";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="app__home">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
