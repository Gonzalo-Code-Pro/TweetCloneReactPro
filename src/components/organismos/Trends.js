import React from "react";
import styled from "styled-components";
import ListFollow from "../molecula/Lists/ListFollow";
import ListTrends from "../molecula/Lists/ListTrends";
import SvgConfig from "../atomos/Svgs/SvgConfig";
let Trends = styled.div`
  height: auto;
  width: 80%;
  margin-top: 54px;
  margin-left: 45px;
  margin-right: 40px;
  margin-bottom: 10px;
`;
let Header = styled.div`
    display :flex; 
    align-items:center;
    justify-content :space-between; 
    border-bottom: 1px solid rgb(235, 238, 240);
    background : rgb(247,249,250);
    padding-left:0.9em;
    padding-top:0.3em;
    padding-right:0.4em;
    border-radius:  16px 16px 0 0;,
    `;
let Link = styled.a`
  color: #1a91da;
  text-decoration: none;
`;
let Footer = styled.div`
  background: rgb(247, 249, 250);
  padding: 0.8em;
  border-radius: 0 0 16px 16px;
`;
let P = styled.p`
  font-weight: 800;
  font-size: 19px;
`;
let Body = styled.div``;
function Trend({ type }) {
  if (type === "follows") {
    return (
      <Trends>
        <Header>
          <P>Follows</P>
          <SvgConfig />
        </Header>
        <Body>
          <ListFollow />
        </Body>
        <Footer>
          <Link href="#">Show More</Link>
        </Footer>
      </Trends>
    );
  } else {
    return (
      <Trends>
        <Header>
          <P>Trends for you</P>
          <SvgConfig />
        </Header>
        <Body>
          <ListTrends />
        </Body>
        <Footer>
          <Link href="#">Show More</Link>
        </Footer>
      </Trends>
    );
  }
}
export default Trend;
