import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="divider">
        <div className="rectangle" />
        <img src="../images/booktown-logo.png" alt="booktown logo" />
      </div>
      <div className="icon-links">
        <a href="https://chakra-ui.com/">
          <img src="/images/footer/chakra.png" alt="chakra icon" />
        </a>
        <a href="https://github.com/chingu-voyages/v42-geckos-team-19">
          <img src="/images/footer/github.png" alt="github icon" />
        </a>
        <a href="https://opensource.com/">
          <img src="/images/footer/opensource.png" alt="opensource icon" />
        </a>
      </div>
      <div className="container">
        <div className="left">
          <a href="#faq" title="Page coming soon!">
            FAQ
          </a>
          <br />
          <a href="" title="Page coming soon!">
            My Account
          </a>
          <br />
          <a href="" title="Page coming soon!">
            Contact
          </a>
        </div>
        <div className="middle">
          <img
            src="/images/footer/open-library-sign.png"
            alt="open library sign"
          />
          <p>WEEKLY NEWSLETTER</p>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="NAME@EMAIL.COM"
          />
          <input type="submit" value="SUBSCRIBE" />
        </div>
        <div className="right">
          <a href="" title="Page coming soon!">
            About
          </a>
          <br />
          <a href="" title="Page coming soon!">
            Categories
          </a>
          <br />
          <a href="" title="Page coming soon!">
            Wishlist
          </a>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 Team Geckos19 V42 All Rights Reserved
      </p>
    </div>
  );
}
