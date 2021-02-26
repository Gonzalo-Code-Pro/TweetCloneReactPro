import React from "react";
import styled from "styled-components";
import CenterTwitter from "../Templates/CenterTwitter";
import LeftTwitter from "../Templates/LeftTwitter";
import RightTwitter from "../Templates/RightTwitter";
function TwitterHome() {
  let TwitterHome = styled.div`
    display: grid;
    grid-template-columns: 318px 1029px;
  `;
  let Container =styled.div`
    display: grid;
    grid-template-columns: 598px 428px;
  `;
  return (
    <TwitterHome>
      <LeftTwitter />
      <Container>
        <CenterTwitter />
        <RightTwitter />
      </Container>
    </TwitterHome>
  );
}
export default TwitterHome;
