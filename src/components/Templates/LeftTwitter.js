import React from "react";
import styled from "styled-components";
import Nav from "../organismos/Nav";

function LeftTwitter() {
  let LeftTwitter = styled.div`
    height: 100vh;
    margin-left: 4em;
  `;
  
  return (
    <LeftTwitter>
      <Nav />
    </LeftTwitter>
  );
}
export default LeftTwitter;
