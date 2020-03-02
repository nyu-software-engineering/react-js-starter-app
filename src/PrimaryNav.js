import React from 'react';
import './PrimaryNav.css';
import { Link } from 'react-router-dom';

const PrimaryNav = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/animals">Animals</Link>
        </nav>
    )
}

export default PrimaryNav;
