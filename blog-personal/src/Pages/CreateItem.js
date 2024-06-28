import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/HeaderComponent";

const CreateItemUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Login() {
  return (
    <CreateItemUI>
      <Header />
      <h1>Create Item</h1>
      <form>
        <h3>Item name:</h3>
        <input type="text" placeholder="itemName" />
        <h3>Item cost:</h3>
        <input type="text" placeholder="itemCost" />
        <button type="submit">Login</button>
      </form>
    </CreateItemUI>
  );
}
