import React, { FC, useState } from 'react';
// import { IconButton, Icon } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../Images/booktown-logo.png';
import styles from './NavBar.module.css';
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
// import Search from '@mui/icons-material/Search';

export const NavBar: FC = () => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className={styles.navBar}>
      <a href='#'>
        <img src={Logo} alt='' className={styles.navBar_img} />
      </a>
      {isMobile ? (
        <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
          <FaSearch />
        </button>
      ) : (
        <form /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBar}>
          <input
            className={styles.navBar_inputText}
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button type='submit' aria-label='Search'>
            <FaSearch />
          </button>
        </form>
      )}
      {isOpenSearch && isMobile ? (
        <form /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBar}>
          <input
            className={styles.navBar_inputText}
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button type='submit' aria-label='Search'>
            <FaSearch />
          </button>
        </form>
      ) : (
        ''
      )}
      {isMobile ? (
        <button onClick={() => setIsOpenList(!isOpenList)}>
          <FaBars />
        </button>
      ) : (
        <ul className={styles.navBar_list}>
          <li>
            <a href='#' tabIndex={0} aria-label='Home'>
              Home
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Categories'>
              Categories
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Wishlist'>
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
                  <a href='#' aria-label='Profile'>
                    Profile
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Sign Up'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Login'>
                    Login
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='ShoppingCar'>
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      )}{' '}
      {isOpenList && isMobile ? (
        <ul className={styles.navBar_list}>
          <li>
            <a href='#' tabIndex={0} aria-label='Home'>
              Home
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Categories'>
              Categories
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Wishlist'>
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
                  <a href='#' aria-label='Profile'>
                    Profile
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Sign Up'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Login'>
                    Login
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='ShoppingCar'>
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  );
};
