import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div class="footer">
            <div class="divider">
                <div class="rectangle" />
                <img src="/booktown-logo.png" alt="booktown logo" />
            </div>
            <div class="icon-links">
                <img src="/images/footer/chakra.png" alt="chakra icon" />
                <img src="/images/footer/github.png" alt="github icon" />
                <img
                    src="/images/footer/opensource.png"
                    alt="opensource icon"
                />
            </div>
            <div class="container">
                <div class="left">
                    <a href="">FAQ</a>
                    <br />
                    <a href="">My Account</a>
                    <br />
                    <a href="">Contact</a>
                </div>
                <div class="middle">
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
                <div class="right">
                    <a href="">About</a>
                    <br />
                    <a href="">Categories</a>
                    <br />
                    <a href="">Wishlist</a>
                </div>
            </div>
            <p class="copyright">
                Copyright © 2023 Team V2 All Rights Reserved
            </p>
        </div>
    );
}
