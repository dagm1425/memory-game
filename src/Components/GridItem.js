/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import styled from "styled-components";

export default function GridItem(props) {
  const { id, name, url, handleCardClick } = props;

  return (
    <div onClick={() => handleCardClick(id)} style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <Img src={url} alt="dog-img"></Img>
    </div>
  );
}

const Img = styled.img`
  width: 230px;
  height: 260px;
  object-fit: cover;
`;
