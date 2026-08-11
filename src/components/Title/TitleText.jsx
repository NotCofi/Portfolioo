import React from 'react';
import './TitleText.css';
import Logo from "../Logo.jsx";

const TitleText = () => {
    return (
        <section className="HeroContainer">

            <div className="ProfileCardZone">
                <Logo />
                <h1><span className="Highlight">N</span>iklas Rauhala</h1>
                <h3>I used to tell myself, that I will only stick to backend but here we are. And, somehow, making a portfolio site on WordPress is harder than making one in an IDE.</h3>
            </div>

            <div className="TitleText">
                <h2>Learning to be Front End & Backend Developer</h2>
            </div>
        </section>
    );
}

export default TitleText;