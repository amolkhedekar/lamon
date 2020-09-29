import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../static/images/logo.svg";
import "./Navbar.css";
import { StateContext } from "../../stateProviders/StateProvider";
import { auth } from "../../services/firebase";

class Navbar extends Component {
  state = { clicked: false };
  menuClickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  static contextType = StateContext;

  render() {
    const [{ user }, dispatch] = this.context;
    const signout = () => {
      if (user) {
        auth.signOut();
      }
    };
    return (
      <div className="header__div">
        <nav className="header">
          <Link to="/">
            <img
              className="header__logo"
              src={Logo}
              width="50"
              height="50"
              alt="Logo"
            />
          </Link>
          <div className="header__menuIcon" onClick={this.menuClickHandler}>
            <i
              className={
                this.state.clicked ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"
              }
            ></i>
          </div>
          <ul
            className={
              this.state.clicked ? "header__menu active" : "header__menu"
            }
          >
            <li onClick={signout}>
              <Link className="header__link" to={!user && "/signin"}>
                {user ? "Sign Out" : "Sign in"}
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/orders">
                Orders
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/cart">
                <i className="fa fa-shopping-cart header__cartIcon"></i>
                <span className="header__cartCount">0</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
