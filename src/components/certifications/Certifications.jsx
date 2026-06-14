import React from 'react';
import './certifications.css';

const certs = [
    {
        badge: '☁',
        name: 'Azure Fundamentals',
        code: 'AZ-900',
        issuer: 'Microsoft',
        color: '#0078d4',
        year: '2023',
        desc: 'Cloud concepts, Azure services, security, compliance, and pricing.',
    },
    {
        badge: '🛡',
        name: 'Certified in Cybersecurity',
        code: 'CC',
        issuer: 'ISC2',
        color: '#00d4ff',
        year: '2023',
        desc: 'Security principles, incident response, access controls, and network security.',
    },
    {
        badge: '⚡',
        name: 'Ethical Hacker',
        code: 'CEH',
        issuer: 'Cisco',
        color: '#1ba0d7',
        year: '2023',
        desc: 'Penetration testing, vulnerability assessment, and offensive security techniques.',
    },
    {
        badge: '📋',
        name: 'ITIL 4 Foundation',
        code: 'ITIL 4',
        issuer: 'Axelos',
        color: '#7b2fff',
        year: '2023',
        desc: 'IT service management framework, value streams, and digital transformation.',
    },
    {
        badge: '🔍',
        name: 'SIEM Fundamentals',
        code: 'SIEM',
        issuer: 'Microsoft Sentinel',
        color: '#00d4ff',
        year: '2023',
        desc: 'Security information & event management, threat detection and log analysis.',
    },
    {
        badge: '🌐',
        name: 'Pre Security',
        code: 'PreSec',
        issuer: 'TryHackMe',
        color: '#ff4757',
        year: '2022',
        desc: 'Foundational cybersecurity, networking, Linux, and web fundamentals.',
    },
];

const Certifications = () => (
    <section id="certifications">
        <span className="section__tag">Verified Credentials</span>
        <h2 className="section__title">Certifications</h2>

        <div className="container certs__grid">
            {certs.map((cert, i) => (
                <article
                    key={i}
                    className="cert-card reveal"
                    style={{ '--cert-color': cert.color, transitionDelay: `${i * 0.08}s` }}
                >
                    <div className="cert-card__top">
                        <span className="cert-card__badge">{cert.badge}</span>
                        <div className="cert-card__meta">
                            <span className="cert-card__code">{cert.code}</span>
                            <span className="cert-card__year">{cert.year}</span>
                        </div>
                    </div>
                    <h3 className="cert-card__name">{cert.name}</h3>
                    <span className="cert-card__issuer">{cert.issuer}</span>
                    <p className="cert-card__desc">{cert.desc}</p>
                    <div className="cert-card__bar" />
                </article>
            ))}
        </div>
    </section>
);

export default Certifications;
