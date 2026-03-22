import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

const navLinks = [
    { href: '#about',      label: 'About'    },
    { href: '#experience', label: 'Skills'   },
    { href: '#services',   label: 'Learning' },
    { href: '#portfolio',  label: 'Projects' },
    { href: '#contact',    label: 'Contact'  },
];

const socials = [
    { href: 'https://www.facebook.com/dinesh.chhetri.75286/', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/dinesh-chhetri/',    icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'https://github.com/dinesh500224471',             icon: <FaGithubAlt />, label: 'GitHub'   },
];

const Footer = () => (
    <footer>
        {/* Top divider glow */}
        <div className="footer__glow-line" aria-hidden="true" />

        <div className="footer__inner">
            {/* Logo / name */}
            <a href="#home" className="footer__brand">
                <span className="footer__brand-name">Dinesh Chhetri</span>
                <span className="footer__brand-role">Cybersecurity Professional</span>
            </a>

            {/* Nav */}
            <nav aria-label="Footer navigation">
                <ul className="footer__nav">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Socials */}
            <div className="footer__socials">
                {socials.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="footer__social-link"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
            <small>
                Designed &amp; Developed with ♥ by <strong>Dinesh Chhetri</strong>
            </small>
        </div>
    </footer>
);

export default Footer;
