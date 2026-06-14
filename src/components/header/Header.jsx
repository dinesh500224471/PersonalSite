import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';

const Header = () => (
    <header id="home" className="header">
        <div className="orb orb--cyan" />
        <div className="orb orb--purple" />

        <div className="container header__container">
            <div className="header__text">
                <span className="header__greeting">Hello, I'm</span>
                <h1 className="header__name">
                    Dinesh<br />
                    <span className="text-gradient">Chhetri</span>
                </h1>
                <p className="header__role">Cybersecurity Professional</p>
                <p className="header__subtitle">
                    IAM Specialist &bull; Security Analyst &bull; Cloud Security
                </p>
                <CTA />
            </div>

            <div className="header__image-wrapper">
                <div className="header__image-frame">
                    <img src={ME} alt="Dinesh Chhetri" />
                    <div className="header__image-glow" />
                </div>
            </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll down">
            <div className="scroll-indicator__line" />
            <span>Scroll</span>
        </a>
    </header>
);

export default Header;
