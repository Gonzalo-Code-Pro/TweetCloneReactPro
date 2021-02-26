import React from "react";
import styled from "styled-components";
function NameTwitter({url,name}) {
  let Name =styled.a`
    color: #5b7083;
    font-size: 14px;
    text-decoration: none;
  `; 
  return (
    <Name href={url}>
      {name}
    </Name>
  );
}
export default NameTwitter;
