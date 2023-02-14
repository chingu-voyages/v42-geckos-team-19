import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.css";
import { FaBars, FaSearch } from "react-icons/fa";
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
=======
import { Link } from "react-router-dom";
>>>>>>> nasiro/homepage-body
import { GrCart } from "react-icons/gr";
import { useAppDispatch } from "../../hooks";
import { selectCurrentUser, signOut } from "../../store/user/userSlice";
import { useSelector } from "react-redux";


const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const isMobileSearch = useMediaQuery({ maxWidth: 479 });
  const isMobileMenu = useMediaQuery({ maxWidth: 967 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate(`categories/${searchValue}`);
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
            {toggle && (
              <ul className={styles.navBar_toggleList}>
                <li>
                  <Link to='auth' aria-label='Profile'>
                    Profile
                  </Link>
                </li>

                <li>
                  {currentUser
                    ? (
                      <Link to="/" onClick={() => dispatch(signOut())}>
                        Sign out
                      </Link>
                    )
                    : (<>
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
                    </>)
                  }
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="#" tabIndex={0} aria-label="ShoppingCart">
              <GrCart fontSize="1.5em" />
            </Link>
          </li>
        </ul>
      )}{" "}
      {isOpenList && isMobileMenu ? (
        <ul className={styles.navBar_listMobile}>
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
            {toggle && (
              <ul className={styles.navBar_toggleListMobile}>
                <li>
                  <Link to='auth' aria-label='Profile'>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to='auth' aria-label='Sign Up'>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to='auth' aria-label='Login'>
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="#" tabIndex={0} aria-label="ShoppingCar">
              <GrCart fontSize="1em" />
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;