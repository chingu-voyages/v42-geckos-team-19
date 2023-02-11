import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

export const NavBar: FC = () => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobileSearch = useMediaQuery({ maxWidth: 479 });
  const isMobileMenu = useMediaQuery({ maxWidth: 967 });

  return (
    <nav className={styles.navBar}>
      <a href="/">
        <img
          src="../images/booktown-logo.png"
          alt=""
          className={styles.navBar_img}
        />
      </a>
      {isMobileSearch ? (
        <button
          className={styles.navBar_searchBtn}
          onClick={() => {
            setIsOpenSearch(!isOpenSearch);
            setIsOpenList(false);
          }}
        >
          <FaSearch />
        </button>
      ) : (
        <form /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBar}>
          <input
            className={styles.navBar_inputText}
            type="text"
            placeholder="Find your favorite book"
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>
      )}
      {isOpenSearch && isMobileSearch ? (
        <form
          /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBarMobile}
        >
          <input
            className={styles.navBar_inputTextMobile}
            type="text"
            placeholder="Find your favorite book"
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>
      ) : (
        ""
      )}
      {isMobileMenu ? (
        <button
          className="styles.navBar_menuBtn"
          onClick={() => {
            setIsOpenList(!isOpenList);
            setIsOpenSearch(false);
          }}
        >
          <FaBars />
        </button>
      ) : (
        <ul className={styles.navBar_list}>
          <li>
            <a href="/" tabIndex={0} aria-label="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="Categories">
              Categories
            </a>
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="Wishlist">
              Wishlist
            </a>
          </li>
          <li className={styles.navBar_buttonProfile}>
            <button
              className={styles.navBar_toggleButton}
              onClick={() => setToggle(!toggle)}
            >
              My Account
            </button>
            {toggle && (
              <ul className={styles.navBar_toggleList}>
                <li>
                  <Link to="authentication" aria-label="Profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="authentication" aria-label="Sign Up">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="authentication" aria-label="Login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="ShoppingCar">
              <GrCart fontSize="1.5em" />
            </a>
          </li>
        </ul>
      )}{" "}
      {isOpenList && isMobileMenu ? (
        <ul className={styles.navBar_listMobile}>
          <li>
            <a href="/" tabIndex={0} aria-label="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="Categories">
              Categories
            </a>
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="Wishlist">
              Wishlist
            </a>
          </li>
          <li className={styles.navBar_buttonProfile}>
            <button
              className={styles.navBar_toggleButton}
              onClick={() => setToggle(!toggle)}
            >
              My Account
            </button>
            {toggle && (
              <ul className={styles.navBar_toggleListMobile}>
                <li>
                  <Link to="authentication" aria-label="Profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="authentication" aria-label="Sign Up">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="authentication" aria-label="Login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" tabIndex={0} aria-label="ShoppingCar">
              <GrCart fontSize="1em" />
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};
