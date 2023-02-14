import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch } from "./hooks";
import Home from "./pages/Home/Home.js";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";
import Categories from "./components/Categories/Categories.js";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { booksApi } from "./store/books/booksSlice";
import BookPage from './components/BookPage/BookPage';
import UserAccount from "./pages/UserAccount/UserAccount";
import { checkUserSession, selectCurrentUser } from "./store/user/userSlice";


const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    if (currentUser && children) {
      return <>children</>;
    } else  {
      return <Navigate to="/auth" />
    }
  };

  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='categories/:param' element={<Categories />} />
          <Route path='categories/' element={<Categories />} />
          <Route path="/book/:param" element={<BookPage />} />
          <Route path="*" element={<div><h1>404</h1></div>} />
          <Route path="/auth" element={<Authentication />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route
            path="/account"
            element={
              <RequireAuth>
                <UserAccount />
              </RequireAuth>
            }
          />
        </Routes>
    </Router>
  );
};

export default App;
