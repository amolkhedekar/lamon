import React, { useState, useEffect } from "react";
import Product from "../../components/product/Product";
import "./Home.css";
import productMethods from "../../database/products";
import Loading from "../../components/loading/Loading";
import { truncate } from "../../helpers/utils";

function Home() {
  const [products, setProducts] = useState(null);
  const getAllProducts = () => {
    const allProducts = [];
    productMethods.getAllProducts().on(
      "value",
      (snapshot) => {
        snapshot.forEach((product) => {
          let key = product.key;
          let data = product.val();
          allProducts.push({
            id: data.id,
            title: data.title,
            price: data.price,
            rating: data.rating,
            brand: data.brand,
            image: data.image,
          });
        });
        setProducts(allProducts);
      },
      (err) => {
        console.log(err.getMessage());
      }
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  let productsToDisplay;
  if (products === null) {
    productsToDisplay = <Loading />;
  } else if (products.length === 0) {
    productsToDisplay = <h1>No Products found</h1>;
  } else {
    productsToDisplay = products.map((item, index) => {
      return (
        <Product
          key={index}
          id={item.id}
          title={truncate(item.title, 90)}
          price={item.price}
          rating={item.rating}
          brand={item.brand}
          image={item.image}
        />
      );
    });
  }
  return (
    <div className="home">
      <span className="home__title">Welcome to Lamon</span>
      <p className="home__description">Shop with freedom as your swings.</p>
      <div className="home__container">{productsToDisplay}</div>
    </div>
  );
}

export default Home;
