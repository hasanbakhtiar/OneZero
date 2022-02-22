import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
           <h1> Blog App</h1>
           <NavLink to="/" exact>Home</NavLink>
           <NavLink to="/blogs">Blogs</NavLink>
           <NavLink to="/create">Create</NavLink>
           <NavLink to="/contact">Contact</NavLink>
        </header>
    )
}

export default Header