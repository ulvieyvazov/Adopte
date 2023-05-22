import React from "react";
import "./index.scss";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-parent">
          <div className="header-top">
            <div className="head">
              <div className="icons">
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <FaYoutube />
                </div>
                <div>
                  <FaInstagram />
                </div>
              </div>

              <div className="login-head">
                <span>Spansor</span>
                <span>Login</span>
              </div>
            </div>
          </div>


          <div className="haeder-bottom">
            <h3>
              ADOPTED
            </h3>

            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li>Adoption</li>
              <li>Success Stories</li>
              <li>About</li>
              <li>Contact</li>
              <li><NavLink to={'/add'}>Add</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;