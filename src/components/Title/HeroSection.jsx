import React from 'react';
import './HeroSection.css';
import Logo from "../Logo.jsx";

const HeroSection = ({children}) => {
    return (
        <div className="HeroContainer">

            <div className="ProfileCardZone">
                <Logo />
                <h1><span className="Highlight">N</span>iklas Rauhala</h1>
                <p>I like to code in my freetime, I a lot of the time make my own programs with the assistance of search engines, and AI. As of right now I am a student, 16.</p>
                <p>React, Python, JS, SQL</p>
            </div>

            <div className="TitleText">
                <h2>Learning to be Front End & Backend Developer</h2>
                   {children}
            </div>

        </div>
    );
}

export default HeroSection;