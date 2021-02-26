import React  from "react";
import styled from "styled-components";
import InputSearch from "../molecula/Items/InputSearch";
import Trends from "../organismos/Trends";
function RightTwitter() {
  let RightTwitter = styled.div`
  
    height: 100vh;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  let HeaderRigth = styled.div`
    border: 1px solid rgb(235, 238, 240);
    min-height: 53px;
    position: fixed;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2em;
    z-index: 1;
  `;
  return (
    <RightTwitter>
      <HeaderRigth>
        <InputSearch />
      </HeaderRigth>
      <InputSearch />
      <Trends type="trending" />
      <Trends type="follows" />
    </RightTwitter>
  );
}
export default RightTwitter;
