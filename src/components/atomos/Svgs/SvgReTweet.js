import React ,{useState}from "react";

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
    div.backgroundColor= '#E0F2E8';
    Span.fill='#17bf63';
    p.color='#17bf63';
  }
  return (
    <span 
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={Span}>
      <div style={div}>
   


<svg style={s} viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
 
 
     </div>
      <p style={p}> 1</p>
    </span>
  );
}

export default Svg;
























