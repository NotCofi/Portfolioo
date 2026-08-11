import Logo from "../Logo.jsx";
import React, { useState } from "react";

const
    NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
        return (
        <nav className="nav-container">
            <div className="nav-logo">
                <Logo />
            </div>

            <ul className="nav-links">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact"></a>contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;