import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="footer">
          <div className="footer-top">
            <h2>Top Products</h2>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>

          <div className="news">
            <p>
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <input type="text" />
            <button>SUBSCRIBE</button>
          </div>

          <div style={{width: '300px', padding: '5px 5px'}} className= 'footer-image'>
            <h2>Instragram Feed</h2>
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
