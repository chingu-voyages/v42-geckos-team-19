import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar";
import { useAppDispatch } from "./hooks";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import UserAccount from "./pages/UserAccount/UserAccount";
import { checkUserSession, selectCurrentUser } from "./store/user/userSlice";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:param" element={<Categories />} />
          <Route path="/auth" element={<Authentication />} />
          <Route
            path="/account"
            element={
              <RequireAuth>
                <UserAccount />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
