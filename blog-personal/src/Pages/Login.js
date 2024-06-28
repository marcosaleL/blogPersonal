import React from "react";
import Header from "../Components/Header/HeaderComponent";
import styled from "styled-components";

const LoginUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Login() {
  return (
    <LoginUI>
      <Header />
      <h1>Log In</h1>
      <form>
        <h3>Email:</h3>
        <input type="text" placeholder="email" />
        <h3>Password:</h3>
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </LoginUI>
  );
}
