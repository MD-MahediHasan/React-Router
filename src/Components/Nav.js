import React from "react";
import {NavLink} from "react-router-dom";

const style={
    color:'green',
    fontWeight:'bold'
}

const Nav=()=>{
 return(
  <nav >
    <NavLink activeStyle={style} end to="/"> Home</NavLink>
    <NavLink activeStyle={style} to="/contact"> Contact</NavLink>
    <NavLink activeStyle={style} to="/about"> About</NavLink>
  </nav>
 )
}
export default Nav;