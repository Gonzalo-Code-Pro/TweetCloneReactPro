import React ,{useState}from "react";
import styled from "styled-components";

function Svg() {
const s = {
  width: "18px",
  height: "18px",
  padding: "8px",
};
let Span = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition:'0.4s all',
  fill:'#5b7083'
}
let p = {
  marginLeft: "5px",
  fontSize: "13px",
  color:'#5b7083'
};
let div = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
}

  const [hover,setHover]= useState(false);
  if(hover){
    div.backgroundColor= '#F5E1E7';
    Span.fill='#e0245e';
    p.color='#e0245e';
  }
  return (
    <span 
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={Span}>
      <div style={div}>
       
<svg style={s} viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>

      </div>
      <p style={p}> 1</p>
    </span>
  );
}

export default Svg;





