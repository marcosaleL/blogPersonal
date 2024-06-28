import React from "react";
import Header from "../Components/Header/HeaderComponent";

import styled from "styled-components";

const CartUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Login() {
  return (
    <CartUI>
      <Header />
      <h1>Cart</h1>
    </CartUI>
  );
}
