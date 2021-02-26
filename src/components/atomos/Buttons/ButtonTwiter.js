import React, { useState } from "react";
function ButtonTwiter({ w, h, d, type }) {
  const [hover, setHover] = useState(false);
  let styleButton = {
    background: "#1da1f2",
    borderRadius: "50px",
    fontSize: "1rem",
    textAlign: "center",
    fontWeight: "600",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    margin: "0.1rem",
    transition: "0.4s all",
    width: `${w}rem`,
    height: `${h}rem`,
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 8px 28px 0px",
  };

  if (type === "secondary") {
    styleButton.background = "transparent";
    styleButton.borderRadius = "50px";
    styleButton.border = "1px solid #1da1f2";
    styleButton.color = "#1da1f2";
    styleButton.fontWeight = "700";
  }
  if (type === "secondary" && hover === true) {
    styleButton.background = "#DAE9F2";
  }
  if (type === "primary" && hover === true) {
    styleButton.background = "#1a91da";
  }
  return (
    <button
      style={styleButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {d}
    </button>
  );
}
export default ButtonTwiter;
