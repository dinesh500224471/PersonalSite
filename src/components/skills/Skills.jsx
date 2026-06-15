import React from 'react';
import './skills.css';

const categories = [
    {
        label: 'IAM & Cloud',
        color: '#00d4ff',
        tools: ['Okta', 'Microsoft Entra ID', 'Azure AD', 'Active Directory', 'MFA / SSO', 'RBAC'],
    },
    {
        label: 'Penetration Testing',
        color: '#ff4757',
        tools: ['Metasploit', 'Burp Suite', 'Nmap', 'SQLMap', 'Aircrack-ng', 'John the Ripper'],
    },
    {
        label: 'Security Operations',
        color: '#2ed573',
        tools: ['Splunk / SIEM', 'Microsoft Sentinel', 'Wireshark', 'Snort / Suricata', 'Nessus', 'pfSense'],
    },
    {
        label: 'Forensics & OSINT',
        color: '#7b2fff',
        tools: ['Volatility', 'Autopsy', 'Ghidra', 'Shodan', 'Maltego', 'Google Dorking'],
    },
];

const Skills = () => (
    <section id="skills">
        <div className="container">
            <span className="section__tag">Technical Stack</span>
            <h2 className="section__title">Tools & Skills</h2>

            <div className="skills__grid reveal">
                {categories.map((cat, i) => (
                    <div key={i} className="skill-cat" style={{ '--cat-color': cat.color }}>
                        <h4 className="skill-cat__label">{cat.label}</h4>
                        <ul className="skill-cat__list">
                            {cat.tools.map((tool, j) => (
                                <li key={j} className="skill-cat__item">
                                    <span className="skill-cat__dot" />
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
