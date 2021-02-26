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
    div.backgroundColor= '#FFFDDE';
    Span.fill='#F5E60A';
    p.color='#F5E60A';
  }
  return (
    <span 
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={Span}>
      <div style={div}>
   

<svg  style={s} viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
  
     </div>
      <p style={p}> 1</p>
    </span>
  );
}

export default Svg;
















