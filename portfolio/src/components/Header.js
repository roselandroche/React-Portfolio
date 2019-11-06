import React from 'react';
import { Link, Route } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Header;
