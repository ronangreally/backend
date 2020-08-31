import React from "react";
import {
    NavLink, Redirect
  } from "react-router-dom";

function NavBar() {
        return( 
            <nav>
                <ul>
                    <li>
                    <NavLink to="/" exact={true}>Home</NavLink>
                    </li> 
                    <li>
                    <NavLink to="/add">Add User</NavLink>
                    </li> 
                </ul>
            </nav>
        )
}

export default NavBar;