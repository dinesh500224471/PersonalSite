import React, { useState } from 'react';
import './nav.css';
import { BiHomeHeart, BiUser, BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav className="floating-nav">
            <a href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}>
                <BiHomeHeart />
                <span>Home</span>
            </a>

            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}>
                <BiUser />
                <span>About</span>
            </a>

            <a href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}>
                <BiBookBookmark />
                <span>Skills</span>
            </a>

            <a href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}>
                <HiDocumentText />
                <span>Projects</span>
            </a>

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
