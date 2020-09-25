import React from "react";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";

function App() {
  return (
    <div className="app">
      <div className="app__home">
        <Navbar />
        <SignUp />
      </div>
    </div>
  );
}

export default App;
