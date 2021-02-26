import React from "react";
import styled from "styled-components";
import TitleUser from "../../atomos/Titles/TitleUser";
import ButtonTwiter from "../../atomos/Buttons/ButtonTwiter";
import UserImg from "../../atomos/Images/UserImg";
import NameUser from "../../atomos/Titles/NameUser";
function ItemFollow({ name, nametwitter }) {
  let Item = styled.div`
    border-bottom: 1px solid rgb(235, 238, 240);
    padding: 0.8em;
    background: #f7f9fa;
    &:hover {
      background: #ebeef0;
    }
  `;
   let UserInfo = styled.div`
      display: flex;
flex-direction :column;
margin-right : auto;
   `;
  let Span = styled.span`
    display: flex;
   justify-content: flex-start;
   align-items: center;
  `;
  return (
    <Item>
      <Span>
        <UserImg
          src="http://k45.kn3.net/taringa/2/2/8/0/6/1/87/kanikase/4F3.jpg?9688"
          h="49px"
          w="49px"
        />

        <UserInfo> 
          <TitleUser name={name} />
          <NameUser name={nametwitter} url="#" />
        </UserInfo>
        <ButtonTwiter w="5.6" h="2.2" d="Follow" type="secondary" />
      </Span>
    </Item>
  );
}
export default ItemFollow;
