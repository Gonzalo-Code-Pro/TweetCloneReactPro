import React from "react";
import SvgComentary from "../atomos/Svgs/SvgComentary";
import SvgReTweet from "../atomos/Svgs/SvgReTweet";
import SvgLike from "../atomos/Svgs/SvgLike";
import SvgCompartir from "../atomos/Svgs/SvgCompartir";
import More from "../atomos/Oters/More";
import styled from "styled-components";
import UserTitle from "../atomos/Titles/TitleUser";
import NameUser from "../atomos/Titles/NameUser";
import UserImg from "../atomos/Images/UserImg";

import ImageTweet from './TweetTypes/ImageTweet'
import ImageDescriptionTweet from './TweetTypes/ImageDescriptionTweet'

function TwitterInput({type,src}) {
  let Tweet = styled.div`
    cursor: pointer;
    border-bottom: 1px solid rgb(235, 238, 240);
    border-left: 1px solid rgb(235, 238, 240);
    border-right: 1px solid rgb(235, 238, 240);
    min-height: auto;
    max-width: auto;
    transition: 0.2s all;
    &:hover {
      background-color: rgb(247, 247, 247);
    }
  `;
  let Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin-top:10px;
  `;
  let Contenido = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:1em;
  `;
  let Icons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:0.4em;
    margin-bottom: 0.4em;
  `;
  let Parrafo = styled.p``;
  let Usuario = styled.div`
    padding: 0.6em;
  `;
  let Box = styled.div`
    display: flex;
    height: 100%;
  `;
  let Punto = styled.span`
    color: #5b7083;
    font-size: 14px;
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 7px;
    height: 7px;
  `;
  let Fecha = styled.span`
  color: #5b7083;
    font-size: 14px;
    text-decoration: none;
  `;
  let Body = styled.div`
    display: flex;
    flex-direction: column;
  `;
  let MoreUser = styled.div`
  display: flex;
  `;
  function typeTweet(type){
    if(type === "imageTweet" && src !== "" ) return <ImageTweet src={src} />;
    if(type === "descriptionTweet" && src !== "") return <ImageDescriptionTweet src={src}/>;
  }
  return (
    <Tweet>
      <Box>
        <Usuario>
          <UserImg
            style={{ display: "flex" }}
            src="https://noverbal.es/uploads/blog/rostro-de-un-criminal.jpg"
            w="48px"
            h="48px"
          />
        </Usuario>
        <Contenido>
          <Head>
            <MoreUser>
              <UserTitle name="Gonzalo" />
              <NameUser name="@gonzaloaxel" url="#" />
              <Punto style={{alignItems:'center'}}>.</Punto>
              <Fecha>24m</Fecha>
            </MoreUser>
            <More />
          </Head>
          <Body>

            <Parrafo>
              Usted ha propuesto que se le autorice al sector privado importar
              vacunas. ¿La fragilidad del sistema no es una prueba suficiente de
              que necesitamos fortalecer al Estado en vez de darle tareas
              fundamentales al privado? #EntreTuits #Voto2020
            </Parrafo>

            {
              typeTweet(type)
            }
            <Icons>
              <SvgComentary />
              <SvgReTweet />
              <SvgLike />
              <SvgCompartir />
            </Icons>
          </Body>
        </Contenido>
      </Box>
    </Tweet>
  );
}
export default TwitterInput;
