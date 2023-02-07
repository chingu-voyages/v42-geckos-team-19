import React from 'react';
import Body from './components/Body/Body.js';
import { Route, Routes } from "react-router-dom";
import Categories from './components/Categories/Categories.js';
import BookPage from './components/BookPage/BookPage.js';

const App = () => {
    return (
        <Routes>
          <Route>
            <Route index element={<Categories/>} />
            <Route path="/categories/:param" element={<Categories />} />
            <Route path="/book/:param" element={<BookPage />} />
            </Route>
        </Routes>
    );
};

export default App;
