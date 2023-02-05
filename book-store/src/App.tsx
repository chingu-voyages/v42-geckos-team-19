import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from "./components/Body/Body.js";
import { NavBar } from "./components/NavBar/NavBar";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Body />} />

        <Route path='/authentication' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
