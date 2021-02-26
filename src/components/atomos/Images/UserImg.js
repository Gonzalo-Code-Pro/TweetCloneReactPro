import React from "react";
import styled from "styled-components";

function UserImg({src,h,w}) {
const Img =styled.img`
border-radius:50%;
`;
  return (
      <Img
        width={w}
        height={h}
        src={src}
        alt=""
      />
  );
}
export default UserImg;
  
