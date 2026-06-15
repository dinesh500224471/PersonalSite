import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.png';

const projects = [
    {
        id: 1,
        image: IMG1,
        title: 'Windows XP – Password Cracking',
        subtitle: 'Vulnerability Research',
        description: 'Demonstrated end-to-end account creation and password cracking on a Windows XP VM using Cain & Abel. Exposed legacy OS weaknesses and documented exploit techniques.',
        what: [
            'Set up an isolated Windows XP VM environment for safe exploitation',
            'Created user accounts, captured and cracked NTLM password hashes',
            'Documented vulnerabilities and recommended modern mitigations',
        ],
        tags: ['Windows XP', 'Cain & Abel', 'NTLM', 'VM Lab'],
        link: 'https://github.com/dinesh500224471/Windows-XP_Cain-Abel',
        color: '#ff4757',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cinema Ticket Machine',
        subtitle: 'Java OOP Application',
        description: 'A fully-functional Java cinema ticketing system with seat selection, pricing tiers, and payment simulation — built using object-oriented principles in NetBeans IDE.',
        what: [
            'Designed an interactive seat-map UI with real-time availability tracking',
            'Built a payment simulation module with receipt generation',
            'Applied MVC architecture, encapsulation, and inheritance throughout',
        ],
        tags: ['Java', 'OOP', 'NetBeans', 'GUI'],
        link: 'https://github.com/dinesh500224471/CinemaTicketMachine',
        color: '#7b2fff',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Microsoft Malware Analysis',
        subtitle: 'Data Science & Security',
        description: 'Deep data-science analysis on the Microsoft Malware Prediction dataset using Python. Identified malware distribution patterns across 9 million+ records.',
        what: [
            'Cleaned and preprocessed a real-world dataset with 9M+ rows in Pandas',
            'EDA revealed malware cluster patterns segmented by OS version and region',
            'Generated correlation heatmaps and feature importance charts for reporting',
        ],
        tags: ['Python', 'Pandas', 'Jupyter', 'Data Viz'],
        link: 'https://github.com/dinesh500224471/Microsoft-Malware',
        color: '#00d4ff',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cryptography Algorithms',
        subtitle: 'Python Implementation',
        description: 'Implemented classical and modern cryptographic algorithms in Python — Caesar, Vigenère, AES-like block cipher, and RSA key generation with an interactive CLI.',
        what: [
            'Coded substitution ciphers (Caesar, Vigenère) and an AES-style block cipher',
            'Simulated RSA key-pair generation and message signing from scratch',
            'Built an interactive encrypt / decrypt CLI tool for all algorithms',
        ],
        tags: ['Python', 'AES', 'RSA', 'Cryptography'],
        link: 'https://github.com/dinesh500224471/Crytpography',
        color: '#7b2fff',
    },
];

const research = {
    title: 'Botnet Technology: A Persistent Threat to Digital Infrastructure',
    subtitle: 'Published Research Paper',
    venue: 'Preprints.org',
    date: 'December 2024',
    authors: 'Devendra Chapagain · Bindu Aryal · Dinesh Chhetri · Bijay Bastakoti',
    description:
        'A comprehensive study on modern botnet ecosystems — examining topologies, covert C2 communication protocols, and evasion techniques that make botnets one of the most resilient and dangerous threats in the cyber landscape.',
    what: [
        'Classified centralized, decentralized, and peer-to-peer (P2P) botnet architectures, comparing resilience and operational profiles',
        'Mapped covert command-and-control (C2) channels and protocol-level evasion mechanisms used to avoid detection',
        'Surveyed detection strategies including traffic anomaly analysis, ML-based behavioral detection, and DNS sinkholing',
        'Proposed mitigation frameworks for enterprise networks and critical infrastructure environments',
    ],
    tags: ['Botnet', 'C2 Protocols', 'Threat Intelligence', 'Malware', 'Cybersecurity'],
    link: 'https://www.preprints.org/manuscript/202412.0660/v1',
    color: '#00b894',
};

const ProjectCard = ({ project }) => (
    <article className="pf-card reveal" style={{ '--pf-color': project.color }}>
        <div className="pf-card__image">
            <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="pf-card__body">
            <div className="pf-card__header">
                <div>
                    <span className="pf-card__subtitle">{project.subtitle}</span>
                    <h3 className="pf-card__title">{project.title}</h3>
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-card__arrow"
                    aria-label={`View ${project.title} on GitHub`}
                >↗</a>
            </div>
            <p className="pf-card__desc">{project.description}</p>
            <div className="pf-card__work">
                <h4 className="pf-card__work-label">What I did</h4>
                <ul>
                    {project.what.map((w, i) => (
                        <li key={i}><span className="pf-dot" />{w}</li>
                    ))}
                </ul>
            </div>
            <div className="pf-card__footer">
                <div className="pf-card__tags">
                    {project.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline pf-card__btn"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    </article>
);

const ResearchCard = ({ paper }) => (
    <article className="pf-card pf-card--research reveal" style={{ '--pf-color': paper.color }}>
        <div className="pf-research__header">
            <div className="pf-research__meta">
                <span className="pf-research__badge">Research Paper</span>
                <span className="pf-research__venue">{paper.venue} · {paper.date}</span>
            </div>
            <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-card__arrow"
                aria-label="Read the paper on Preprints.org"
            >↗</a>
        </div>

        <div className="pf-card__body">
            <span className="pf-card__subtitle">{paper.subtitle}</span>
            <h3 className="pf-card__title">{paper.title}</h3>
            <p className="pf-research__authors">{paper.authors}</p>
            <p className="pf-card__desc">{paper.description}</p>

            <div className="pf-card__work">
                <h4 className="pf-card__work-label">Key contributions</h4>
                <ul>
                    {paper.what.map((w, i) => (
                        <li key={i}><span className="pf-dot" />{w}</li>
                    ))}
                </ul>
            </div>

            <div className="pf-card__footer">
                <div className="pf-card__tags">
                    {paper.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary pf-card__btn"
                >
                    Read Paper
                </a>
            </div>
        </div>
    </article>
);

const Portfolio = () => (
    <section id="portfolio">
        <span className="section__tag">Selected Work</span>
        <h2 className="section__title">Projects & Research</h2>
        <div className="container portfolio__grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            <ResearchCard paper={research} />
        </div>
    </section>
);

export default Portfolio;
