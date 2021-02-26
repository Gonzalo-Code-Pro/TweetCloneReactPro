import React from "react";
import styled from "styled-components";
import More from "../../atomos/Oters/More";
let Item = styled.div`
  border-bottom: 1px solid rgb(235, 238, 240);

  background: #f7f9fa;
  &:hover {
    background: #ebeef0;
  }

  padding: 0.8em;
`;
let NameTrend = styled.span`
  display: flex;
  height: 16px;
  justify-content: space-between;
`;
let Count = styled.span`
  color: #5b7083;
  fontsize: 13px;
`;
let Title = styled.span`
  font-size: 15px;
  font-weight: 700;
`;
let SubTitle = styled.span`
  font-size: 13px;
  color: #5b7083;
`;

function ItemTrend() {
  return (
    <Item>
      <NameTrend>
        <SubTitle>sddsdsdsdfwedsfc</SubTitle>
        <More />
      </NameTrend>
      <Title>Sagasti</Title>
      <br />
      <Count>1,157 Tweets</Count>
    </Item>
  );
}
export default ItemTrend;
