import React, { useState } from 'react';
import './nav.css';
import { BiHomeHeart, BiUser, BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <nav className="floating-nav">
            {/* Home */}
            <a href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'active' : ''}>
                <BiHomeHeart />
                <span>Home</span>
            </a>

            {/* About */}
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}>
                <BiUser />
                <span>About</span>
            </a>

            {/* Skills / Experience */}
            <a href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}>
                <BiBookBookmark />
                <span>Skills</span>
            </a>

            {/* Portfolio / Projects */}
            <a href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}>
                <HiDocumentText />
                <span>Projects</span>
            </a>

            {/* Contact */}
            <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail />
                <span>Contact</span>
            </a>
        </nav>
    );
};

export default Nav;
