import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarUI = styled.div`
  padding: 10px;
  display: flex;
  height: 30px;
  background-color: #212121;
  font-family: sans-serif;
  align-self: center;

  .button {
    font-size: 20px;
    border: none;
    text-align: center;
    display: flex;
    padding-right: 10px;
    margin-right: 10px;
    background-color: transparent;
    color: white;
    font-weight: 500;
    border-right: 2px #5d0179 solid;
    text-decoration: none; /* Ensure links are not underlined */
  }
`;

function NavBar() {
  return (
    <NavBarUI>
      <Link to="/" className="button">
        Home
      </Link>
      <Link to="/login" className="button">
        Log In
      </Link>
      <Link to="/sign-in" className="button">
        Sign In
      </Link>
      <Link to="/create-item" className="button">
        Create Item
      </Link>
      <Link to="/cart" className="button">
        Cart
      </Link>
      <Link to="/checkout" className="button">
        Checkout
      </Link>
    </NavBarUI>
  );
}

export default NavBar;
