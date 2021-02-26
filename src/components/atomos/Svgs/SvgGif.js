import React,{useState} from "react";

const style = {
  width: "22px",
  height: "22px",
  fill: "#1da1f2",
};
function Svg() {
const teenstyle = () => {
    let Span = {
      width: "22px",
      cursor: "pointer",
      height: "22px",
      borderRadius: "50%",
      padding: "0.4em",
      fill: "#1da1f2",
      display: "flex",
      alignItems: "center",
    };

    if (hover) {
      Span.background = "#ecf7fe";
      return Span;
    } else {
      Span.background = "transparent";
      return Span;
    }
  };
  const [hover, sethover] = useState(false);
  return (
    <span style={teenstyle()}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <svg style={style} viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
      </span>  
);
}

export default Svg;
