import React from "react";
import styled from "styled-components";
import SvgStars from "../../atomos/Svgs/IconSvg";

let Header = styled.div`
  position: fixed;
  background: white;
  width: 599px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 53px;
  border: 1px solid rgb(235, 238, 240);
`;
let hT = {
  fontSize: "19px",
  fontWeight: "800",
  padding: "0.5em",
  flex: "20",
};
function HeaderHome() {
  return (
    <div style={{ position: "relative",width:"595px"}}>
      <Header>
        <p style={hT}>Home</p>
        <SvgStars/>
      </Header>
    </div>
  );
}
export default HeaderHome;
