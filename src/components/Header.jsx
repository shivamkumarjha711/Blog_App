import React from "react";

import "../styles/header.css"
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div id="header">
            <h1>PW Blogs</h1>
            <div>
                <NavLink to={'/'}><button>Home</button></NavLink>
                <NavLink><button>Blog</button></NavLink>
                <NavLink to={'/addblog'}><button>Add Blog</button></NavLink>
            </div>
        </div>
    )
}