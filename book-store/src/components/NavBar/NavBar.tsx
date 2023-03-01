import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useAppDispatch } from "../../hooks";
import { selectCurrentUser, signOut } from "../../store/user/userSlice";
import { selectCartItems } from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { Show, Hide, Flex, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { NavContentsProps, NavMenuProps, LiComponentProps } from "./types";

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
  const totalBooks = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

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
    <>
      <Show above="md">
        <NavContents isSingleLineMenu={true} />
      </Show>
      <Hide above="md">
        <NavContents isSingleLineMenu={false} />
      </Hide>
    </>
  );

  function NavContents(props: NavContentsProps) {
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
        {
          (props.isSingleLineMenu)
            ? (
              <Flex flexDir="row" gap="1em">
                <NavMenu ItemContainerTag={LiComponent} />
              </Flex>
            )
            : (
              <Menu>
                <MenuButton as={Button} >LOL</MenuButton>
                <MenuList>
                  <NavMenu ItemContainerTag={MenuItem} />
                </MenuList>
              </Menu>
            )
        }
      </nav >

    )

  }

  function LiComponent(props: LiComponentProps) {
    return (
      <li>{props.children}</li>
    )
  }

  function NavMenu(props: NavMenuProps) {
    const ItemContainerTag = props.ItemContainerTag;
    return (
      <>

        <ItemContainerTag>
          <Link to="/" tabIndex={0} aria-label="Home">
            Home
          </Link>
        </ItemContainerTag>
        <ItemContainerTag>
          <Link to="/categories/general" tabIndex={0} aria-label="Categories">
            Categories
          </Link>
        </ItemContainerTag>
        <ItemContainerTag>
          <Link to="#" tabIndex={0} aria-label="Wishlist">
            Wishlist
          </Link>
        </ItemContainerTag>
        <ItemContainerTag className={styles.navBar_buttonProfile}>
          <button
            className={styles.navBar_toggleButton}
            onClick={() => setToggle(!toggle)}
          >
            My Account
          </button>
          {toggle && (
            <ul className={styles.navBar_toggleList}>
              <ItemContainerTag>
                <Link to="auth" aria-label="Profile">
                  Profile
                </Link>
              </ItemContainerTag>
              {currentUser ? (
                <ItemContainerTag>
                  <Link to="/" onClick={() => dispatch(signOut())}>
                    Sign out
                  </Link>
                </ItemContainerTag>
              ) : (
                <>
                  <ItemContainerTag>
                    <Link to="/auth" aria-label="Login">
                      Login
                    </Link>
                  </ItemContainerTag>
                  <ItemContainerTag>
                    <Link to="auth" aria-label="Sign Up">
                      Sign Up
                    </Link>
                  </ItemContainerTag>
                </>
              )}
            </ul>
          )}
        </ItemContainerTag>
        <ItemContainerTag className={styles.shoppingCart}>
          <Link to="/checkout">
            <GrCart fontSize="1.5em" />
            {Boolean(totalBooks) && <span>{totalBooks}</span>}
          </Link>
        </ItemContainerTag>
      </>
    )
  }
};



export default NavBar;
