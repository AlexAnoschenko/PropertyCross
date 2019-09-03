import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

function NavBar() {
    return (
        <div className="nav-block">
            <Link to="/">App</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/page3">Page3</Link>
        </div>
    );
}

export default NavBar;
