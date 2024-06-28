import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CreateItem from "./Pages/CreateItem";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
