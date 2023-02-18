import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { useAppDispatch } from "../../hooks";
import { selectCurrentUser, signOut } from "../../store/user/userSlice";
import { selectCartItems} from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Badge from 'react-bootstrap/Badge';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  /* Find total number of books in cart for badge on shopping cart icon */
  const cartItems = useSelector(selectCartItems);
  
  function totalBooks () {
    // [{quantity: number},{quantity: number;}]
    let sum = 0;
    cartItems.forEach(function(book) {
      sum += book.quantity;
    });
    return (<Badge bg="secondary">{sum}</Badge>);
  }

  const isMobileSearch = useMediaQuery({ maxWidth: 479 });
  const isMobileMenu = useMediaQuery({ maxWidth: 967 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/?q=${searchValue}`);
  };

  
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <img
          src="../images/booktown-logo.png"
          alt=""
          className={styles.navBar_img}
        />
      </Link>
        <form onSubmit={handleSubmit} className={styles.navBar_searchBar}>
          <input
            className={styles.navBar_inputText}
            type="text"
            placeholder="Find your favorite book"
            value={searchValue}
            onChange={handleChange}
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>
        <ul className={styles.navBar_list}>
          <li>
            <Link to="/" tabIndex={0} aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories/general" tabIndex={0} aria-label="Categories">
              Categories
            </Link>
          </li>
          <li>
            <Link to="#" tabIndex={0} aria-label="Wishlist">
              Wishlist
            </Link>
          </li>
          <li className={styles.navBar_buttonProfile}>
            <button
              className={styles.navBar_toggleButton}
              onClick={() => setToggle(!toggle)}
            >
              My Account
            </button>
          </li>
          <li className={styles.shoppingCart}>
          <GrCart fontSize="1.5em"/>
          <span>42</span>
          </li>
          </ul>
            {toggle && (
              <ul className={styles.navBar_toggleList}>
                <li>
                  <Link to='auth' aria-label='Profile'>
                    Profile
                  </Link>
                </li>
                  {currentUser
                    ? (
                      <li>
                      <Link to="/" onClick={() => dispatch(signOut())}>
                        Sign out
                      </Link>
                      </li>
                    )
                    : (
                    <>
                      <li>
                        <Link to="/auth" aria-label="Login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to='auth' aria-label='Sign Up'>
                          Sign Up
                        </Link>
                      </li>
                    </>
                    )}
            </ul>
            )}
                </nav>
  );
};

export default NavBar;