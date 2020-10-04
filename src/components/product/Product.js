import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product card">
      <p className="product__title">{props.title}</p>
      <p className="product__currency">
        <small>₹</small>
        <strong className="product__price">{props.price}</strong>
      </p>
      <img className="product__image" src={props.image} alt="product__image" />
      <div className="produdct__div__brand__rating">
        <p className="product__brand">
          <small>By - </small>
          <strong>{props.brand}</strong>
        </p>
        <p className="product__rating">{props.rating}★</p>
      </div>
      <button href="#" className="product__cartButton">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
