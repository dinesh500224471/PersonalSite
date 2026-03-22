import React, { useEffect, useRef } from 'react';
import './experience.css';

const categories = [
    {
        title: 'Programming & Scripting',
        color: '#00d4ff',
        skills: [
            { name: 'Python',      level: 'Intermediate', pct: 68 },
            { name: 'C++',         level: 'Experienced',  pct: 75 },
            { name: 'JavaScript',  level: 'Experienced',  pct: 72 },
            { name: 'SQL',         level: 'Experienced',  pct: 78 },
        ],
    },
    {
        title: 'Cybersecurity & Pentesting',
        color: '#7b2fff',
        skills: [
            { name: 'Nmap',          level: 'Experienced',  pct: 85 },
            { name: 'Wireshark',     level: 'Experienced',  pct: 82 },
            { name: 'Metasploit',    level: 'Intermediate', pct: 65 },
            { name: 'Burp Suite',    level: 'Intermediate', pct: 60 },
        ],
    },
    {
        title: 'IAM & Cloud Security',
        color: '#00d4ff',
        skills: [
            { name: 'Okta',                     level: 'Experienced', pct: 88 },
            { name: 'Azure AD / Entra ID',      level: 'Experienced', pct: 85 },
            { name: 'SIEM (Sentinel)',           level: 'Experienced', pct: 80 },
            { name: 'MFA & SSO',                level: 'Experienced', pct: 90 },
        ],
    },
];

const SkillBar = ({ name, level, pct, color, visible }) => (
    <div className="skill-row">
        <div className="skill-row__meta">
            <span className="skill-row__name">{name}</span>
            <span className="skill-row__level">{level}</span>
        </div>
        <div className="skill-row__track">
            <div
                className="skill-row__fill"
                style={{
                    '--fill-pct': `${pct}%`,
                    '--fill-color': color,
                    width: visible ? `${pct}%` : '0%',
                }}
            />
            <span className="skill-row__pct" style={{ opacity: visible ? 1 : 0 }}>{pct}%</span>
        </div>
    </div>
);

const CategoryCard = ({ title, color, skills }) => {
    const ref = useRef(null);
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.25 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`exp-card reveal${visible ? ' visible' : ''}`}
            style={{ '--card-accent': color }}
        >
            <div className="exp-card__header">
                <div className="exp-card__dot" />
                <h3 className="exp-card__title">{title}</h3>
            </div>
            <div className="exp-card__skills">
                {skills.map((s, i) => (
                    <SkillBar key={i} {...s} color={color} visible={visible} />
                ))}
            </div>
        </div>
    );
};

const Experience = () => (
    <section id="experience">
        <span className="section__tag">My Technical Expertise</span>
        <h2 className="section__title">Skills &amp; Experience</h2>

        <div className="container experience__grid">
            {categories.map((cat, i) => (
                <CategoryCard key={i} {...cat} />
            ))}
        </div>
    </section>
);

export default Experience;
