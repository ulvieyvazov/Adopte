import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header">
          <div>
            <img
              src="https://preview.colorlib.com/theme/blogger/img/logo.png.webp"
              alt=""
            />
          </div>

          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>News</li>
            <li>Travel</li>
            <li>fashion</li>
            <li>team</li>
            <li>Pages</li>
            <li>
              <NavLink to={"/add"}>Add</NavLink>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Header;
