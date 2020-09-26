import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import SearchInput from "./components/searchInput/SearchInput";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchInput />
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
