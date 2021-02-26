import React from "react";
import styled from "styled-components";
import Verificacion from "../../atomos/Svgs/Verificacion";
function TitleUser({name}) {
  let Name = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 14px;
    display:flex;
    align-items: center;
    &:hover{
      text-decoration : underline;
    }
  `;
  return (
    <Name href="#">
      <span> {name}</span>
      <Verificacion h="17px" w="17px" fill="#1da1f2" />
    </Name>
  );
}
export default TitleUser;
