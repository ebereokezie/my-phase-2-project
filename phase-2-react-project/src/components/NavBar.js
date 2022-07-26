import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "25px",
    margin: "0 6px 6px",
    color: "white",
  };

function NavBar(){
    return(
        <div className = "Navbar">
            <NavLink to = "/" exact style = {linkStyles}>Home</NavLink>
            <NavLink to = "/lakers" exact style = {linkStyles}>Lakers</NavLink>
            <NavLink to = "/celtics" exact style = {linkStyles}>Celtics</NavLink>
            <NavLink to = "/rockets" exact style = {linkStyles}>Rockets</NavLink>
            <NavLink to = "/halloffame" exact style = {linkStyles}> myHOF</NavLink>
        </div>
    )
}

export default NavBar;