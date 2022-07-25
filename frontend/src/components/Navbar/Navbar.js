import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Navbar.css";
import { LOG_OUT } from "../../redux/User/userTypes";
function Navbar() {
  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  // Logout
  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <p>EN</p>
        <div className="left__input">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      <div className="navbar__center">
        <Link to="/">
          <img
            src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/register">
          {!user ? <p>REGISTER</p> : <p>{user.username}</p>}
        </Link>
        <Link to="/login">
          {!user ? <p>SIGNIN</p> : <p onClick={handleLogout}>LogOut</p>}
        </Link>
        <div className="right__cart">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <div className="cart__notify">{products.qty}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
