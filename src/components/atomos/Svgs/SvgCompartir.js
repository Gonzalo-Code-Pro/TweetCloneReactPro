import React, { useState } from "react";
import styled from "styled-components";

function Svg() {
  const s = {
    width: "18px",
    height: "18px",
    padding: "8px",
  };
  let Span = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.4s all",
    fill: "#5b7083",
  };
  let p = {
    marginLeft: "5px",
    fontSize: "13px",
    color: "#5b7083",
  };
  let div = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
  };

  const [hover, setHover] = useState(false);
  if (hover) {
    div.backgroundColor = "#E8F5FE";
    Span.fill = "#1da1f2";
    p.color = "#1da1f2";
  }
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={Span}
    >
      <div style={div}>
        <svg
          style={s}
          viewBox="0 0 24 24"
          class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
        >
          <g>
            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
          </g>
        </svg>
      </div>
      <p style={p}> 1</p>
    </span>
  );
}

export default Svg;

