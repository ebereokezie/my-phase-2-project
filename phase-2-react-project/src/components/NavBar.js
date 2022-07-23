import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className = "Navbar">
            <NavLink to = "/">Home</NavLink>
        </div>
    )
}

export default NavBar;