import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  const cartStore = useSelector((state) => state.cartReducer.cart);
  console.log(cartStore);
  return (
    <header className="bg-dark text-white">
      <div className="d-flex justify-content-between">
        <nav className="p-2">
          <NavLink
            to=""
            className={(props) =>
              props.isActive
                ? "mx-2 bg-white text-dark p-3 text-decoration-none"
                : "mx-2 text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={(props) =>
              props.isActive
                ? "mx-2 bg-white text-dark p-3 text-decoration-none"
                : "mx-2 text-white"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/login"
            className={(props) =>
              props.isActive
                ? "mx-2 bg-white text-dark p-3 text-decoration-none"
                : "mx-2 text-white"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={(props) =>
              props.isActive
                ? "mx-2 bg-white text-dark p-3 text-decoration-none"
                : "mx-2 text-white"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/profile"
            className={(props) =>
              props.isActive
                ? "mx-2 bg-white text-dark p-3 text-decoration-none"
                : "mx-2 text-white"
            }
          >
            Profile
          </NavLink>
        </nav>
        <NavLink
          to={"/cart"}
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none d-block mt-2"
              : " d-block mt-2 mx-2 text-white link"
          }
          style={{ textDecoration: "none" }}
        >
          <i className="fa fa-cart-plus fs-2"></i>({cartStore.length})
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderMenu;
