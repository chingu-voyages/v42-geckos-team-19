import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories.js";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:param" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default App;
