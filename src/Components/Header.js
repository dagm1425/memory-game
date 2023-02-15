import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderImg
        src="https://cdn-icons-png.flaticon.com/512/1076/1076877.png"
        alt="logo"
      />
      <h1>Memory Game</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #fff2e6;
  align-items: center;
  height: 55px;
  padding: 1.75rem 8rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const HeaderImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 1.2rem;
`;
