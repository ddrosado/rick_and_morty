import React from "react";
import SearchBar from "../SearchBar.jsx";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props){
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
        </div>
    )
}