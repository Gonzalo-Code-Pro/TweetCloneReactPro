import React from "react";
import styled from "styled-components";
import SearchIcon from  '../../atomos/Svgs/SvgSearch'
function InputSearch() {
  let Search = styled.div`
    background: #ebeef0;
    padding: 0.8em;
    border-radius: 100px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  let input = {
    border: "none",
    outline: "none",
    width: '330px',
    paddingLeft: "8px",
    background: "#ebeef0",
  };
  return (
    <Search>
      <SearchIcon/>
      <input style={input} type="text" placeholder="Search" />
    </Search>
  );
}

export default InputSearch;
