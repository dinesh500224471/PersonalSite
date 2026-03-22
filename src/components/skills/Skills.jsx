import React, { useState, useRef, useEffect } from 'react';
import './skills.css';

const categories = [
    {
        id: 'offensive',
        label: 'Offensive',
        icon: '⚔',
        color: '#ff4757',
        skills: [
            { name: 'Metasploit', icon: '💀', level: 90 },
            { name: 'Burp Suite', icon: '🕷', level: 88 },
            { name: 'Nmap', icon: '🔍', level: 95 },
            { name: 'SQLMap', icon: '💉', level: 82 },
            { name: 'Aircrack-ng', icon: '📡', level: 78 },
            { name: 'John the Ripper', icon: '🔑', level: 85 },
        ],
    },
    {
        id: 'defensive',
        label: 'Defensive',
        icon: '🛡',
        color: '#00d4ff',
        skills: [
            { name: 'Snort / Suricata', icon: '🚨', level: 80 },
            { name: 'Wireshark', icon: '🌊', level: 92 },
            { name: 'pfSense', icon: '🔥', level: 75 },
            { name: 'SIEM / Splunk', icon: '📊', level: 78 },
            { name: 'Nessus', icon: '🩺', level: 83 },
            { name: 'Yara Rules', icon: '📋', level: 70 },
        ],
    },
    {
        id: 'web',
        label: 'Web Security',
        icon: '🌐',
        color: '#7b2fff',
        skills: [
            { name: 'OWASP Top 10', icon: '📚', level: 93 },
            { name: 'XSS / CSRF', icon: '🧨', level: 88 },
            { name: 'SQL Injection', icon: '🗄', level: 90 },
            { name: 'JWT Attacks', icon: '🎫', level: 82 },
            { name: 'SSRF / XXE', icon: '🔓', level: 79 },
            { name: 'Subdomain Enum', icon: '🕸', level: 85 },
        ],
    },
    {
        id: 'forensics',
        label: 'Forensics',
        icon: '🔬',
        color: '#2ed573',
        skills: [
            { name: 'Volatility', icon: '🧠', level: 80 },
            { name: 'Autopsy', icon: '🗂', level: 75 },
            { name: 'FTK Imager', icon: '💾', level: 72 },
            { name: 'Ghidra', icon: '🦎', level: 78 },
            { name: 'Binwalk', icon: '🗜', level: 82 },
            { name: 'Strings / xxd', icon: '🔢', level: 88 },
        ],
    },
    {
        id: 'osint',
        label: 'OSINT',
        icon: '👁',
        color: '#ffa502',
        skills: [
            { name: 'Maltego', icon: '🕵', level: 77 },
            { name: 'Shodan', icon: '🌍', level: 85 },
            { name: 'TheHarvester', icon: '🌾', level: 83 },
            { name: 'Recon-ng', icon: '🔭', level: 80 },
            { name: 'SpiderFoot', icon: '🕷', level: 75 },
            { name: 'Google Dorking', icon: '🔎', level: 90 },
        ],
    },
];

const SkillCard = ({ skill, color, index }) => {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = `perspective(600px) rotateY(${dx * 18}deg) rotateX(${-dy * 18}deg) translateZ(10px)`;
        if (glowRef.current) {
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, ${color}33 0%, transparent 70%)`;
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)';
        }
        if (glowRef.current) {
            glowRef.current.style.background = 'transparent';
        }
    };

    return (
        <div
            className="skill-card reveal"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ '--skill-color': color, '--delay': `${index * 0.07}s` }}
        >
            <div className="skill-card__glow" ref={glowRef} />
            <div className="skill-card__corner skill-card__corner--tl" />
            <div className="skill-card__corner skill-card__corner--br" />
            <div className="skill-card__icon">{skill.icon}</div>
            <div className="skill-card__name">{skill.name}</div>
            <div className="skill-card__bar-wrap">
                <div
                    className="skill-card__bar"
                    style={{ '--pct': `${skill.level}%` }}
                />
            </div>
            <div className="skill-card__level">{skill.level}%</div>
        </div>
    );
};

const Skills = () => {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const scanRef = useRef(null);

    useEffect(() => {
        setAnimKey(k => k + 1);
    }, [active]);

    const cat = categories[active];

    return (
        <section id="skills">
            <div className="container">
                <span className="section__tag">// system.scan</span>
                <h2 className="section__title">
                    <span className="text-gradient">Arsenal</span>
                </h2>

                <div className="skills__tabs reveal">
                    {categories.map((c, i) => (
                        <button
                            key={c.id}
                            className={`skills__tab${i === active ? ' active' : ''}`}
                            style={{ '--tab-color': c.color }}
                            onClick={() => setActive(i)}
                            type="button"
                        >
                            <span className="skills__tab-icon">{c.icon}</span>
                            <span className="skills__tab-label">{c.label}</span>
                        </button>
                    ))}
                </div>

                <div className="skills__scan-line" ref={scanRef} style={{ '--scan-color': cat.color }} />

                <div className="skills__grid" key={animKey}>
                    {cat.skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} color={cat.color} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
