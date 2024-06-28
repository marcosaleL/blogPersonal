import React from "react";
import styled from "styled-components";

const SpacerUI = styled.div`
  height: ${({ viewHeight }) => (viewHeight === 0 ? "1vh" : viewHeight)};
  width: ${({ viewWidth }) => (viewWidth === 0 ? "1vh" : viewWidth)};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Spacer({ viewWidth, viewHeight }) {
  return <SpacerUI viewWidth={viewWidth} viewHeight={viewHeight}></SpacerUI>;
}

export default Spacer;
