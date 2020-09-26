import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product card">
      <p className="product__title">
        All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful
        bass and Alexa (Black)
      </p>
      <p className="product__currency">
        <small>₹</small>
        <strong className="product__price">4,999</strong>
      </p>
      <p className="product__rating">★★★★★</p>
      <img
        className="product__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
        alt="product__image"
      />
      <p className="product__brand">
        <small>By - </small>
        <strong>Amazon Original</strong>
      </p>
      <button href="#" className="product__cartButton">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
