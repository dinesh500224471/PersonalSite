import React from 'react';
import './experience.css';

const jobs = [
    {
        role: 'Security Analyst',
        company: 'D & D ERP Consulting',
        period: '2023 – Present',
        color: '#00d4ff',
        responsibilities: [
            'Implemented RBAC and MFA across 200+ user accounts, reducing unauthorised access incidents',
            'Deployed Okta SSO integration, streamlining authentication across multiple departments',
            'Monitored and responded to security events using Microsoft Sentinel SIEM platform',
            'Conducted quarterly access reviews and security audits for compliance assurance',
        ],
        tools: ['Okta', 'Azure AD', 'Microsoft Sentinel', 'MFA', 'RBAC'],
    },
    {
        role: 'IT Administrator',
        company: 'Private Organisation',
        period: '2021 – 2023',
        color: '#7b2fff',
        responsibilities: [
            'Managed Active Directory for 100+ user accounts with strict access control policies',
            'Maintained network infrastructure and Windows Server environments at 99.5% uptime',
            'Secured network perimeter using pfSense firewall rules and continuous traffic monitoring',
            'Deployed patches, managed Group Policy, and handled escalated helpdesk incidents',
        ],
        tools: ['Active Directory', 'Windows Server', 'pfSense', 'Wireshark', 'PowerShell'],
    },
    {
        role: 'Security Researcher',
        company: 'Loyalist College',
        period: '2024',
        color: '#00b894',
        responsibilities: [
            'Researched botnet topologies: centralized, decentralized, and peer-to-peer architectures',
            'Analysed covert C2 communication channels and protocol-level evasion mechanisms',
            'Surveyed ML-based detection strategies including traffic anomaly analysis and DNS sinkholing',
            'Co-authored and published findings on Preprints.org — December 2024',
        ],
        tools: ['Threat Intelligence', 'Malware Analysis', 'Academic Research', 'Technical Writing'],
    },
];

const Experience = () => (
    <section id="experience">
        <span className="section__tag">Career History</span>
        <h2 className="section__title">Experience</h2>

        <div className="container timeline">
            <div className="timeline__line" aria-hidden="true" />
            {jobs.map((job, i) => (
                <div key={i} className="timeline__entry reveal-right">
                    <div className="timeline__dot" style={{ '--dot-color': job.color }} />
                    <article className="timeline__card" style={{ '--entry-color': job.color }}>
                        <div className="timeline__card-head">
                            <div>
                                <h3 className="timeline__role">{job.role}</h3>
                                <span className="timeline__company">{job.company}</span>
                            </div>
                            <span className="timeline__period">{job.period}</span>
                        </div>
                        <ul className="timeline__list">
                            {job.responsibilities.map((r, j) => (
                                <li key={j}>
                                    <span className="timeline__bullet" />
                                    {r}
                                </li>
                            ))}
                        </ul>
                        <div className="timeline__tools">
                            {job.tools.map((t, j) => (
                                <span key={j} className="timeline__tool">{t}</span>
                            ))}
                        </div>
                    </article>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
