import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <span className="home__title">Welcome to Lamon</span>
      <p className="home__description">Shop with freedom as your swings.</p>
      <div className="home__container">
        <div className="home__row">1</div>
        <div className="home__row">2</div>
        <div className="home__row">3</div>
        <div className="home__row">4</div>
        <div className="home__row">5</div>
        <div className="home__row">6</div>
      </div>
    </div>
  );
}

export default Home;
