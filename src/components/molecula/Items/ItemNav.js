import React ,{useState}from "react";

import SvgMessage  from  '../../atomos/Svgs/SvgMessage'
import SvgMore  from  '../../atomos/Svgs/SvgMore'
import SvgPerfil  from  '../../atomos/Svgs/SvgPerfil'
import SvgNoty  from  '../../atomos/Svgs/SvgNoty'
import SvgInicio  from  '../../atomos/Svgs/SvgInicio'
import SvgExplorer from  '../../atomos/Svgs/SvgExplorer'

function ItemNav({ desc, icon}){
  const [hover,setHover] = useState(false)
  let ItemNav = {
      padding:'14px',
      borderRadius : '50px',
      position:'relative'  
}
  let span = {
      position:'absolute',
  }
let Li = {
    padding:'14px',
    textDecoration : 'none',
    transition: '0.2s all',
    border: 'none',
    fontSize: '19px',
    fontWeight: '600',
    color:'#0f1419',
    cursor: 'pointer',
    borderRadius:'50px' 
}
 if(hover){
       Li.background = '#ECF7FE';
       Li.color = '#1a91da';
       Li.color="#1a91da"
    }
  const IconSelect =(i,hover) => {
    if(i==='inicio'){
      return  <SvgInicio hover={hover}/>
    }
    if(i === 'message'){
      return <SvgMessage hover={hover}/>
    }
    if(i === 'perfil'){
      return <SvgPerfil  hover={hover}/>
    }

    if(i === 'noty'){
      return <SvgNoty hover={hover}/>
    }

    if(i === 'explorer'){
      return <SvgExplorer hover={hover}/>
    }

    if(i === 'more'){
      return <SvgMore hover={hover}/>
    }
  }
  return (
    <div
      style={ItemNav}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
      <a style={Li} href="#">
        <span style={span}>
            {IconSelect(icon,hover)}
        </span>
        <a style={{marginLeft:'2em'}}>{desc}</a>
      </a>

    </div>
  );
}
export default ItemNav;
