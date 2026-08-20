import React from 'react';
import './HeroSection.css';
import Logo from "../Logo.jsx";

const HeroSection = ({children}) => {
    return (
        <div className="HeroContainer">

            <div className="ProfileCardZone">
                <Logo />
                <h1><span className="Highlight">N</span>iklas Rauhala</h1>
                <h3>Coffee.</h3>
            </div>

            <div className="TitleText">
                <h2>Learning to be Front End & Backend Developer</h2>
            </div>

            <div className="ProjectsWarpper">
                {children}
            </div>
        </div>
    );
}

export default HeroSection;