import React from "react";
import TitleUser from "../atomos/Title";
import More from "../atomos/More";
import NameTwitter from "../atomos/NameTwitter";
import styled from "styled-components";

function HeaderTweet() {
  let HeadTweet = styled.span`
    position: relative,
    font-weight: 600,
    display: flex,
    text-decoration: none,
    color: #000,
    justify-content: space-between,
      margin-top: 0.7em
      `;
  let Date = styled.span`
    color:#5b7083,
    text-decoration: none,
    font-weight: 500
  `;
  let Box = styled.span`
    display: flex;
    align-items: center;
  `;
  return (
    <HeadTweet>
      <Box>
        <TitleUser />
        <NameTwitter />
        <Date href="#">Feb</Date>
      </Box>
      <More />
    </HeadTweet>
  );
}
export default HeaderTweet;
