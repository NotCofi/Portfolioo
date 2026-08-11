import React from 'react';
import './TitleText.css';
import Logo from "../Logo.jsx";

const TitleText = () => {
    return (
        <section className="HeroContainer">

            <div className="ProfileCardZone">
                <Logo />
                <h1><span className="Highlight">N</span>iklas Rauhala</h1>
                <h3>Learning everyday something new. However, one thing that I learn everyday that is not new, is my hatred for WordPress.</h3>
            </div>

            <div className="TitleText">
                <h2>Learning to be Front End & Backend Developer</h2>
            </div>
        </section>
    );
}

export default TitleText;