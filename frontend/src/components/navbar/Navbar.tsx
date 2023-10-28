// import React from "react";
import "./styles.scss";
import logoImage from "/src/assets/XA.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logoImage} alt="" />
      </Link>
      <div className="nav-items">
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/giving"}>Giving</Link>
          <Link to={"/events"}>Events</Link>
          <a href="">Opportunity</a>
          <a href="">Blog</a>
          <Link to={"/directory"}>Directory</Link>
        </div>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
    </div>
  );
}
