import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home.js";
import { NavBar } from "./components/NavBar/NavBar";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";
import Categories from "./components/Categories/Categories.js";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { booksApi } from "./store/books/booksSlice";
import BookPage from './components/BookPage/BookPage';
import SearchResults from "./pages/SearchResults/SearchResults";

const App = () => {

  return (
    <Router>
      <NavBar />
      <ApiProvider api={booksApi}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':param' element={<SearchResults />} />
          <Route path='categories/:param' element={<Categories />} />
          <Route path='categories/' element={<Categories />} />
          <Route path="/book/:param" element={<BookPage />} />
          <Route path="*" element={<div><h1>404</h1></div>} />


          <Route path='/authentication' element={<Authentication />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </ApiProvider>
    </Router>
  );
};

export default App;
