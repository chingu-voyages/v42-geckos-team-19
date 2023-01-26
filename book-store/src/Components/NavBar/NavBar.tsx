import React, { FC, useState } from 'react';
import { IconButton, Icon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../Images/booktown-logo.png';
import NavStyles from './NavBar.module.css';

export const NavBar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className={NavStyles.navBar}>
      <a href='#'>
  
        <img src={Logo} alt='' className={NavStyles.navBar_img} />
      </a>

      <form /*onSubmit={handleSubmit}*/ className={NavStyles.navBar_searchBar}>
        <input
          className={NavStyles.navBar_inputText}
          type='text'
          placeholder='Find your favorite book'
          //   value={searchTerm}
          //   onChange={handleChange}
        />
        <IconButton type='submit' aria-label='Search'>
          <SearchIcon />
        </IconButton>
      </form>
      <ul className={NavStyles.navBar_list}>
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
        <li className={NavStyles.navBar_buttonProfile}>
          <button
            className={NavStyles.navBar_toggleButton}
            onClick={() => setToggle(!toggle)}
          >
            My Account
          </button>
          {toggle && (
            <ul className={NavStyles.navBar_toggleList}>
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
            <ShoppingCartIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};
