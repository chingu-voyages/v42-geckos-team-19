import React, { FC, useState } from 'react';
import { IconButton, Icon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../Images/booktown-logo.png';
import './NavBar.css';

export const NavBar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className='navBar'>
      <img src={Logo} alt='' className='navBar_img' />
      <form /*onSubmit={handleSubmit}*/ className='navBar_searchBar'>
        <input className='navBar_inputText'
          type='text'
          placeholder='Find your favorite book'
          //   value={searchTerm}
          //   onChange={handleChange}
        />
        <IconButton type='submit' aria-label='search'>
          <SearchIcon />
        </IconButton>
      </form>
      <ul className='navBar_list'>
        <li>
          <a href='#' tabIndex={0} aria-label='Home'>
            Home
          </a>
        </li>
        <li>
          <a href='#' tabIndex={0} aria-label='Shop'>
            Categories
          </a>
        </li>
        <li>
          <a href='#' tabIndex={0} aria-label='Wishlist'>
            Wishlist
          </a>
        </li>
        <li className='navBar_buttonProfile'>
          <button className='navBar_toggleButton' onClick={() => setToggle(!toggle)}>My Account</button>
          {toggle && (
            <ul className='navBar_toggleList'>
              <li>Profile</li>
              <li>Sign Up</li>
              <li>Login</li>
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
