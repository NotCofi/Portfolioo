import React from 'react';
import './TitleText.css';
import Logo from "../Logo.jsx";

const TitleText = () => {
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
        </div>
    );
}

export default TitleText;