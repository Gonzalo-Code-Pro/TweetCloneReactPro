import React from "react";
import styled from "styled-components";

const More = styled.div`
 font-size: 20px;
 font-weight:700;
 cursor: pointer;
 width:34.75px;
 color:#000;
 height:34.75px;
 text-align: center;
 border-radius:50%;
 margin:0;
 &:hover{
    color:#1da1f2;
    background-color:#E8F5FE;
 }
`;
function MoreOne() {
  return (
    <More>
      ...
    </More>
  );
}
export default MoreOne;
