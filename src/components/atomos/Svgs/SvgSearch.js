import React from "react";

function Svg() {
  return (
    <svg
      style={{width: '18px',height:'18px'}}
      aria-labelledby="title desc"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.9 19.7"
    >
      <title id="title">Search Icon</title>
      <desc id="desc">A magnifying glass icon.</desc>
      <g class="search-path" fill="none" stroke="#848F91">
        <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
        <circle cx="8" cy="8" r="7" />
      </g>
    </svg>
  );
}

export default Svg;
