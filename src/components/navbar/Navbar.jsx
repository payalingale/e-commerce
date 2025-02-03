import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search icon.png";
import user from "../../assets/profile-icon.png";
import cartBox from "../../assets/Vector.png";
import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="right-side">
        <img src={logo} alt="" />
      </div>
      <div className="center">
        <ul className="menu-items">
          <Link to="/">
            <li className="item">HOME</li>
          </Link>
          <Link to="/collection">
            <li className="item">COLLECTION</li>
          </Link>
          <li className="item">ABOUT</li>
          <li className="item">CONTACT</li>
        </ul>
      </div>
      <div className="left-side">
        <img src={search} alt="" />
        <Link to="/login">
          <img src={user} alt="" />
        </Link>

        <img src={cartBox} alt="" />
      </div>
      <hr className="navbar-hr" />
    </div>
  );
};

export default Navbar;
