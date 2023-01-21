import React, { FC } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar: FC = () => {
  return (
    <nav>
      <img src='' alt='' />
      <form /*onSubmit={handleSubmit}*/>
        <input
          type='text'
          placeholder='Search...'
          //   value={searchTerm}
          //   onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <ul>
        <li>
          <a href='#' tabIndex={0} aria-label='Home'>
            Home
          </a>
        </li>
        <li>
          <a href='#' tabIndex={0} aria-label='Shop'>
            Shop
          </a>
        </li>
        <li>
          <a href='#' tabIndex={0} aria-label='Wishlist'>
            Wishlist
          </a>
        </li>
        <li>
          <a href='#' tabIndex={0} aria-label='myAccount'>
            My Account
          </a>
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
