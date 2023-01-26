import React, { FC, useState } from 'react';
import { IconButton, Icon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../Images/booktown-logo.png';
import './NavBar.css';
import Search from '@mui/icons-material/Search';

export const NavBar: FC = () => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className='navBar'>
      <a href='#'>
        <img src={Logo} alt='' className='navBar_img' />
      </a>
      {isMobile ? (
        <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
          <SearchIcon />
        </button>
      ) : (
        <form /*onSubmit={handleSubmit}*/ className='navBar_searchBar'>
          <input
            className='navBar_inputText'
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <IconButton type='submit' aria-label='Search'>
            <SearchIcon />
          </IconButton>
        </form>
      )}
      {isOpenSearch && isMobile ? (
        <form /*onSubmit={handleSubmit}*/ className='navBar_searchBar'>
          <input
            className='navBar_inputText'
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <IconButton type='submit' aria-label='Search'>
            <SearchIcon />
          </IconButton>
        </form>
      ) : (
        ''
      )}
      {isMobile ? (
        <button onClick={() => setIsOpenList(!isOpenList)}>
          <MenuIcon />
        </button>
      ) : (
        <ul className='navBar_list'>
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
          <li className='navBar_buttonProfile'>
            <button
              className='navBar_toggleButton'
              onClick={() => setToggle(!toggle)}
            >
              My Account
            </button>
            {toggle && (
              <ul className='navBar_toggleList'>
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
      )}{' '}
      {isOpenList && isMobile ? (
        <ul className='navBar_list'>
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
          <li className='navBar_buttonProfile'>
            <button
              className='navBar_toggleButton'
              onClick={() => setToggle(!toggle)}
            >
              My Account
            </button>
            {toggle && (
              <ul className='navBar_toggleList'>
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
      ) : (
        ''
      )}
    </nav>
  );
};
