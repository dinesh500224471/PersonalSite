import React, { useState, useEffect } from 'react';
import './nav.css';
import { BiHomeHeart, BiUser, BiMessageSquareDetail, BiShield } from 'react-icons/bi';
import { HiDocumentText, HiBadgeCheck } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';

const links = [
    { id: '#home',       icon: <BiHomeHeart />,          label: 'Home'       },
    { id: '#about',      icon: <BiUser />,               label: 'About'      },
    { id: '#experience', icon: <MdWorkOutline />,         label: 'Experience' },
    { id: '#skills',     icon: <BiShield />,             label: 'Skills'     },
    { id: '#portfolio',  icon: <HiDocumentText />,        label: 'Projects'   },
    { id: '#contact',    icon: <BiMessageSquareDetail />, label: 'Contact'    },
];

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const sections = links.map(l => document.querySelector(l.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) setActiveNav(`#${e.target.id}`);
            }),
            { threshold: 0.35 }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav-pill">
            {links.map(({ id, icon, label }) => (
                <a
                    key={id}
                    href={id}
                    onClick={() => setActiveNav(id)}
                    className={`nav-pill__item${activeNav === id ? ' active' : ''}`}
                    aria-label={label}
                >
                    <span className="nav-pill__icon">{icon}</span>
                    <span className="nav-pill__label">{label}</span>
                    {activeNav === id && <span className="nav-pill__indicator" />}
                </a>
            ))}
        </nav>
    );
};

export default Nav;
