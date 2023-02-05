import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Images/booktown-logo.png";
import styles from "./NavBar.module.css";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser, signOut } from "../../store/user/userSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";

const NavBar: FC = () => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobileSearch = useMediaQuery({ maxWidth: 479 });
  const isMobileMenu = useMediaQuery({ maxWidth: 967 });

  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <nav className={styles.navBar}>
        <Link to="/">
          <img src={Logo} alt="" className={styles.navBar_img} />
        </Link>
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
            /*onSubmit={handleSubmit}*/ className={
              styles.navBar_searchBarMobile
            }
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
              <Link to="/" tabIndex={0} aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" tabIndex={0} aria-label="Categories">
                Categories
              </Link>
            </li>
            <li>
              {/* <a href="#" tabIndex={0} aria-label="Wishlist">
                Wishlist
              </a> */}
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
                    <Link to="/account" aria-label="Profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    {currentUser ? (
                      <Link to="/" onClick={() => dispatch(signOut())}>
                        Sign out
                      </Link>
                    ) : (
                      <Link to="/auth" aria-label="Login">
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" tabIndex={0} aria-label="ShoppingCar">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        )}{" "}
        {isOpenList && isMobileMenu ? (
          <ul className={styles.navBar_listMobile}>
            <li>
              <a href="#" tabIndex={0} aria-label="Home">
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
                    <a href="#" aria-label="Profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Sign Up">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Login">
                      Login
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" tabIndex={0} aria-label="ShoppingCar">
                <FaShoppingCart style={{ height: "1rem" }} />
              </a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
