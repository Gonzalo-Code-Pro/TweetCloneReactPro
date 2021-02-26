import React from "react";
import styled from "styled-components";
import ItemNav from "../molecula/Items/ItemNav";
import ButtonTwitter from "../atomos/Buttons/ButtonTwiter";
import Logo from "../atomos/Images/Logo";
import UserImg from "./../atomos/Images/UserImg";
import UserTitle from "./../atomos/Titles/TitleUser";
import NameUser from "./../atomos/Titles/NameUser";
import More from "./../atomos/Oters/More";

let InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -5.5em;
`;
let Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0em;
  margin-bottom: 1em;
`;
let User = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 50px;
  padding: 0.5em;
  margin-right: 0.4em;
  magin-bottom: 0.3em;
  cursor: pointer;
  &:hover {
    background-color: #e8f5fe;
  }

  align-items: center;
`;
let NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14em;
  padding-top: 0.3em;
`;
let List = styled.div`
  margin-left: -1.2em;
`;
function NavTwitter() {
  return (
    <Nav>
      <List>
        <Logo />
        <ItemNav desc="Inicio" icon="inicio" />
        <ItemNav desc="Listas" icon="perfil" />
        <ItemNav desc="Notificaciones" icon="explorer" />
        <ItemNav desc="Mensajes" icon="noty" />
        <ItemNav desc="Explorar" icon="more" />
        <ItemNav desc="Guardados" icon="message" />
        <ItemNav desc="Listas" icon="perfil" />
        <ItemNav desc="Mas opciones" icon="more" />
      </List>
      <NavFooter>
        <ButtonTwitter w="15.213" h="3.1" d="Tweet" type="primary" />
        <User>
          <UserImg
            src="http://k45.kn3.net/taringa/2/2/8/0/6/1/87/kanikase/4F3.jpg?9688"
            w="40px"
            h="40px"
          />
          <InfoUser>
            <UserTitle name="Gonzalo" />
            <NameUser url="#" name="@gonzalo" />
          </InfoUser>
          <More />
        </User>
      </NavFooter>
    </Nav>
  );
}

export default NavTwitter;
