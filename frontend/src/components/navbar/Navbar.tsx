// import React from "react";
import "./styles.scss";
import logoImage from "/src/assets/XA.png";
import { PrimaryBtn } from "../button/Buttons";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="">
        <img src={logoImage} alt="" />
      </a>
      <div className="nav-items">
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">Giving</a>
          <a href="">Events</a>
          <a href="">Opportunity</a>
          <a href="">Blog</a>
          <a href="">Directory</a>
        </div>
        <PrimaryBtn text="Contact Us" onClick={() => {}} />
      </div>
    </div>
  );
}
