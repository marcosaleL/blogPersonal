import React from "react";
import Header from "../Components/Header/HeaderComponent";

import styled from "styled-components";

const SignInUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Login() {
  return (
    <SignInUI>
      <Header />
      <h1>Sign Up</h1>
      <form>
        <h3>Username:</h3>
        <input type="text" placeholder="username" />
        <h3>Email:</h3>
        <input type="text" placeholder="email" />
        <h3>Password:</h3>
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </SignInUI>
  );
}
