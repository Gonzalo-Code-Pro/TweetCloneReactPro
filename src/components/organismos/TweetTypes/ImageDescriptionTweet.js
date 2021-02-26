import React from "react";
import styled from "styled-components";
import SVG from "./../../atomos/Svgs/SvgLink";
let Component = styled.a`
  text-decoration: none;
  border: 1px solid #dee2e4;
  border-radius: 15px;
  margin-top: 10px;
  width: 506px;
  height: auto;
`;
let ImgTweet = styled.img`
  width: 100%;
  height: 283px;
  border-radius: 15px 15px 0 0;

  border-bottom: 1px solid #dee2e4;
`;
let Description = styled.p`
  padding: 0.5em;
  width: 100%;
`;
let Titulo = styled.div`
  color: #0f1419;
`;
let P = styled.p`
  color: #5b7083;
  width: 95%;
`;
let Link = styled.a`
  color: #5b7083;
  display: flex;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
function ImageDescriptionTweet({ src }) {
  return (
    <Component href="#">
      <ImgTweet src={src} alt="" />
      <Description>
        <Titulo>
          Coronavirus en Peru: Cifra de fallecidos a causa de la pandemia{" "}
        </Titulo>
        <P>
          La comision Sectorial Investigadora de la aplicacion de la vacuna
          candidata contra el coronavirus sobre esta lista
        </P>
        <Link href="#">
          <SVG /> americatv.com.pe
        </Link>
      </Description>
    </Component>
  );
}

export default ImageDescriptionTweet;
