import React from "react";
import NavBar from "../NavBar/NavBarComponent";
import styled from "styled-components";

const HeaderUI = styled.header`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export default function Header() {
  return (
    <HeaderUI>
      <div>
        <h1>Hello World!</h1>
        <NavBar />
      </div>
    </HeaderUI>
  );
}
