import React, { useState } from 'react';
import './skills.css';

const categories = [
    {
        id: 'iam',
        label: 'IAM & Cloud',
        color: '#00d4ff',
        skills: [
            { name: 'Okta',                  level: 92 },
            { name: 'Microsoft Entra ID',    level: 90 },
            { name: 'Active Directory',      level: 88 },
            { name: 'MFA / SSO',             level: 95 },
            { name: 'Azure (AZ-900)',         level: 85 },
            { name: 'RBAC & IAM Policies',   level: 90 },
        ],
    },
    {
        id: 'pentest',
        label: 'Penetration Testing',
        color: '#ff4757',
        skills: [
            { name: 'Metasploit',            level: 90 },
            { name: 'Burp Suite',            level: 88 },
            { name: 'Nmap',                  level: 95 },
            { name: 'SQLMap',                level: 82 },
            { name: 'John the Ripper',       level: 85 },
            { name: 'Aircrack-ng',           level: 78 },
        ],
    },
    {
        id: 'secops',
        label: 'Security Operations',
        color: '#2ed573',
        skills: [
            { name: 'SIEM / Splunk',         level: 85 },
            { name: 'Microsoft Sentinel',    level: 80 },
            { name: 'Wireshark',             level: 92 },
            { name: 'Snort / Suricata',      level: 80 },
            { name: 'Nessus',               level: 83 },
            { name: 'pfSense',               level: 75 },
        ],
    },
    {
        id: 'forensics',
        label: 'Forensics & OSINT',
        color: '#7b2fff',
        skills: [
            { name: 'Volatility',            level: 80 },
            { name: 'Autopsy',               level: 75 },
            { name: 'Shodan',                level: 85 },
            { name: 'Maltego',               level: 77 },
            { name: 'Ghidra',                level: 78 },
            { name: 'Google Dorking',        level: 90 },
        ],
    },
];

const Skills = () => {
    const [active, setActive] = useState(0);
    const cat = categories[active];

    return (
        <section id="skills">
            <div className="container">
                <span className="section__tag">Technical Expertise</span>
                <h2 className="section__title">Skills</h2>

                <div className="skills__tabs reveal">
                    {categories.map((c, i) => (
                        <button
                            key={c.id}
                            className={`skills__tab${i === active ? ' active' : ''}`}
                            style={{ '--tab-color': c.color }}
                            onClick={() => setActive(i)}
                            type="button"
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="skills__grid">
                    {cat.skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="skill-item reveal"
                            style={{ '--skill-color': cat.color }}
                        >
                            <div className="skill-item__header">
                                <span className="skill-item__name">{skill.name}</span>
                                <span className="skill-item__pct">{skill.level}%</span>
                            </div>
                            <div className="skill-item__track">
                                <div className="skill-item__bar" style={{ '--pct': `${skill.level}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
