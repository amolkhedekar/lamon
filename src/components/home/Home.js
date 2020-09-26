import React from "react";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <span className="home__title">Welcome to Lamon</span>
      <p className="home__description">Shop with freedom as your swings.</p>
      <div className="home__container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
