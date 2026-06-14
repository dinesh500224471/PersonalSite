import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';

const CERTS = [
    'Az-900 Cloud Fundamentals',
    'ISC2 CC',
    'Cisco Ethical Hacker',
    'Cloud Security',
    'ITIL 4 Foundation',
    'IAM & Okta',
    'SIEM Sentinel',
    'MFA & SSO',
];

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
                <p className="header__subtitle">
                    Cybersecurity Professional &bull; IAM Specialist &bull; Security Analyst
                </p>
                <div className="header__tags">
                    {CERTS.map((c, i) => (
                        <span className="tag" key={i} style={{ animationDelay: `${i * 0.1}s` }}>{c}</span>
                    ))}
                </div>
                <CTA />
            </div>

            <div className="header__image-wrapper">
                <div className="header__image-scene">
                    <div className="header__image-3d">
                        <div className="header__image-glow" />
                        <div className="header__image-ring ring1" />
                        <div className="header__image-ring ring2" />
                        <div className="header__image-frame">
                            <img src={ME} alt="Dinesh Chhetri" />
                        </div>
                    </div>
                </div>
                <div className="orbit-label ol-1">IAM</div>
                <div className="orbit-label ol-2">SIEM</div>
                <div className="orbit-label ol-3">Pentesting</div>
                <div className="orbit-label ol-4">Cloud</div>
            </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll down">
            <div className="scroll-indicator__line" />
            <span>Scroll</span>
        </a>
    </header>
);

export default Header;
