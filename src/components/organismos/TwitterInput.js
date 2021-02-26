import React from "react";
import styled from "styled-components";
import UserImg from "../atomos/Images/UserImg";
import ButtonTwitter from "../atomos/Buttons/ButtonTwiter";
import SvgPicture from "../atomos/Svgs/SvgPicture";
import SvgGif from "../atomos/Svgs/SvgGif";
import SvgChart from "../atomos/Svgs/SvgChart";
import SvgDate from "../atomos/Svgs/SvgDate";
import SvgWordl from "../atomos/Svgs/SvgWordl";
import SvgHappy from "../atomos/Svgs/SvgHappy";

let TweetInput = styled.div`
  border-left: 1px solid rgb(235, 238, 240);
  border-right: 1px solid rgb(235, 238, 240);
  width: 99.6%;
  min-height: 117px;
  padding-top: 53px;
  display: flex;
`;
let BoxUser = styled.div`
  padding: 0.5em;
`;
let BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

let Box1 = styled.div`
 
`;
let Box2 = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
`;
let WordlIcon = styled.a`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
margin: 0.2em;
  font-size: 13px;
  font-weight: 600;
  padding:0.3em;
  border-radius:30px;
  cursor: pointer;
  &:hover{
     background: #ecf7fe;
  }
  color: #1da1f2;
`;

let TextTweet = styled.textarea`
  padding: 10px;
  font-size: 17px;
  display: block;
  border: none;
  resize: none;
  outline: none;
  margin-top:15px;
`;

let Icons = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-top: 12px;
`;
let P = styled.p`
  font-size: 13px;
  margin-left:5px;
`;

function Input() {
  return (
    <TweetInput>
      <BoxUser>
        <UserImg
          src="https://noverbal.es/uploads/blog/rostro-de-un-criminal.jpg"
          w="49px"
          h="49px"
        />
      </BoxUser>
      <BoxInput>
        <Box1>
          <TextTweet
            id="textarea"
            type="text"
            placeholder="¿Que esta pasando?"
          ></TextTweet>
          <WordlIcon> <SvgWordl/>  <P>Cualquier persona puede responder </P> </WordlIcon>
        </Box1>
        <Box2>
          <Icons>        
            <SvgPicture/>
            <SvgGif />
            <SvgChart />
            <SvgHappy />
            <SvgDate />
          </Icons>
          <ButtonTwitter w="5.4" h="2.6" d="Tweet" type="primary" />
        </Box2>
      </BoxInput>
    </TweetInput>
  );
}
export default Input;

