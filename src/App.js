import React, { useEffect } from "react";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Router from "./router/router";
import { auth } from "./firebase/firebaseConfig";


function App() {
  useEffect(() => {
    auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        console.log("THE USER IS >>> ", loggedUser.email);
      } else {
      }
    });
  }, []);

  return <Router />;
}

export default App;
