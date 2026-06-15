import React from 'react';
import './services.css';

const capabilities = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: 'Identity & Access Management',
        color: '#00d4ff',
        description: 'Design and enforce IAM frameworks that control who accesses what — and when.',
        points: [
            'Okta and Azure AD SSO configuration',
            'RBAC policy design and enforcement',
            'MFA and conditional access deployment',
            'Access lifecycle reviews and compliance',
        ],
        tools: ['Okta', 'Azure AD', 'MFA', 'RBAC', 'Entra ID'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M6 8h4M6 11h6" />
                <circle cx="17" cy="9" r="3" />
            </svg>
        ),
        title: 'Security Operations',
        color: '#7b2fff',
        description: 'Monitor, detect, and respond to threats in real time using enterprise SIEM platforms.',
        points: [
            'SIEM configuration and custom alert rules',
            'Incident detection, triage, and escalation',
            'Log analysis and threat hunting',
            'Security posture dashboards and reporting',
        ],
        tools: ['Splunk', 'Microsoft Sentinel', 'Wireshark', 'Snort', 'Nessus'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.91 8.84L8.56 2.23a1.93 1.93 0 0 0-1.56 0L3.1 4.46a2 2 0 0 0-1 1.76V12a9.3 9.3 0 0 0 4 7.53l4.46 2.52a2 2 0 0 0 1.94 0l4.46-2.52A9.3 9.3 0 0 0 21 12V6.22a2 2 0 0 0-1.09-1.38z" />
                <polyline points="7 12 10 15 17 8" />
            </svg>
        ),
        title: 'Penetration Testing',
        color: '#ff4757',
        description: 'Assess attack surfaces through structured ethical hacking and vulnerability research.',
        points: [
            'Network and web application scanning',
            'Vulnerability identification and exploitation',
            'OWASP Top 10 assessment methodology',
            'Detailed remediation and risk reports',
        ],
        tools: ['Metasploit', 'Burp Suite', 'Nmap', 'SQLMap', 'Aircrack-ng'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v3l2 2" />
            </svg>
        ),
        title: 'Digital Forensics & Research',
        color: '#00b894',
        description: 'Investigate security incidents, analyse malware, and produce actionable intelligence.',
        points: [
            'Memory and disk forensic acquisition and analysis',
            'Malware behaviour and reverse engineering',
            'OSINT and threat actor attribution',
            'Published academic research on botnet threats',
        ],
        tools: ['Volatility', 'Autopsy', 'Ghidra', 'Shodan', 'Maltego'],
    },
];

const Services = () => (
    <section id="services">
        <span className="section__tag">What I Bring</span>
        <h2 className="section__title">Capabilities</h2>

        <div className="container cap__grid">
            {capabilities.map((cap, i) => (
                <article
                    key={i}
                    className="cap-card reveal"
                    style={{ '--cap-color': cap.color, transitionDelay: `${i * 0.1}s` }}
                >
                    <div className="cap-card__icon" style={{ color: cap.color }}>
                        {cap.icon}
                    </div>
                    <h3 className="cap-card__title">{cap.title}</h3>
                    <p className="cap-card__desc">{cap.description}</p>
                    <ul className="cap-card__list">
                        {cap.points.map((p, j) => (
                            <li key={j}>
                                <span className="cap-card__bullet" />
                                {p}
                            </li>
                        ))}
                    </ul>
                    <div className="cap-card__tools">
                        {cap.tools.map((t, j) => (
                            <span key={j} className="cap-card__tool">{t}</span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Services;
