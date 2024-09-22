import React from "react";
import "../styles/header.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
  const cartStore = useSelector((state) => state.cartReducer.cart);
  return (
    <header className="header">
      <div className="container">
        <nav className="menu">
          <ul>
            <li>
              <NavLink
                to=""
                className={(props) => (props.isActive ? "actives" : "")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={(props) => (props.isActive ? "actives" : "")}
              >
                SEARCH
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={(props) => (props.isActive ? "actives" : "")}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={(props) => (props.isActive ? "actives" : "")}
              >
                REGISTER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={(props) => (props.isActive ? "actives" : "")}
              >
                PROFILE
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search">
            <div className="search-input">
              <input type="text" placeholder="Bạn cần tìm gì" />
              <i className="fa fa-search" />
            </div>
            <div className="cart">
              <NavLink
                to={"/cart"}
                className={(props) =>
                  props.isActive
                    ? "mx-2  text-dark  text-decoration-none d-block mt-2"
                    : " d-block mt-2 mx-2 text-white link"
                }
                style={{ textDecoration: "none" }}
              >
                <i className="fa fa-cart-plus" />({cartStore.length})
              </NavLink>
            </div>
          </div>
          <div className="user">
            <NavLink
              to="/login"
              className={(props) =>
                props.isActive ? "avticeButton me-2" : "me-2"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={(props) => (props.isActive ? "avticeButton" : "")}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
