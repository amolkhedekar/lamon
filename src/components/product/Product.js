import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  return (
    <div className="product card">
      <Link to={"/products/" + props.uid}>
        <p className="product__title">{props.title}</p>
        <p className="product__currency">
          <small>₹</small>
          <strong className="product__price">{props.price}</strong>
        </p>
        <img
          className="product__image"
          src={props.image}
          alt="product__image"
        />
      </Link>
      <div className="produdct__div__brand__rating">
        <p className="product__brand">
          <small>By - </small>
          <strong>{props.brand}</strong>
        </p>
        <p className="product__rating">{props.rating}★</p>
      </div>
      <div className="product__div__button">
        <button href="#" className="product__cartButton">
          Add to Cart
        </button>
        <button className="product__addTocartButton">
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
