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
        description: 'Demonstrated end-to-end user account creation and password cracking on a Windows XP VM using Cain & Abel. Exposed legacy OS weaknesses and documented exploit techniques.',
        tags: ['Windows XP', 'Cain & Abel', 'NTLM', 'VM Lab'],
        what: [
            'Set up isolated Windows XP VM environment',
            'Created user accounts, captured and cracked NTLM hashes',
            'Documented legacy vulnerabilities and modern mitigations',
        ],
        github: 'https://github.com/dinesh500224471/Windows-XP_Cain-Abel',
        color: '#ff4757',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cinema Ticket Machine',
        subtitle: 'Java OOP Application',
        description: 'A fully-functional Java cinema ticketing system with seat selection, pricing tiers, and payment simulation built using OOP principles in NetBeans IDE.',
        tags: ['Java', 'OOP', 'NetBeans', 'GUI'],
        what: [
            'Designed interactive seat-map UI with real-time availability',
            'Built payment simulation with receipt generation',
            'Applied MVC architecture and encapsulation principles',
        ],
        github: 'https://github.com/dinesh500224471/CinemaTicketMachine',
        color: '#7b2fff',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Microsoft Malware Analysis',
        subtitle: 'Data Science & Security',
        description: 'Deep data-science analysis on the Microsoft Malware Prediction dataset using Python. Identified malware distribution patterns across 9M+ rows.',
        tags: ['Python', 'Pandas', 'Jupyter', 'Data Viz'],
        what: [
            'Cleaned and preprocessed a 9M+ row real-world dataset',
            'EDA revealed malware cluster patterns by OS and region',
            'Generated correlation heatmaps and feature importance charts',
        ],
        github: 'https://github.com/dinesh500224471/Microsoft-Malware',
        color: '#00d4ff',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cryptography Algorithms',
        subtitle: 'Python Implementation',
        description: 'Implemented classical and modern cryptographic algorithms in Python — Caesar, Vigenère, AES-like block cipher, and RSA key generation with an interactive CLI.',
        tags: ['Python', 'AES', 'RSA', 'Cryptography'],
        what: [
            'Coded Caesar, Vigenère, and block cipher substitution',
            'Simulated RSA key-pair generation and message signing',
            'Built interactive encrypt / decrypt CLI tool',
        ],
        github: 'https://github.com/dinesh500224471/Crytpography',
        color: '#7b2fff',
    },
];

const research = {
    id: 5,
    title: 'Botnet Technology: A Persistent Threat to Digital Infrastructure',
    subtitle: 'Published Research Paper',
    venue: 'Preprints.org · December 2024',
    authors: 'D. Chapagain · B. Aryal · D. Chhetri · B. Bastakoti',
    description:
        'Comprehensive academic study on modern botnet ecosystems — examining topologies, covert communication protocols, and evasion techniques that make botnets one of the most resilient threats to digital infrastructure.',
    tags: ['Botnet', 'Threat Intelligence', 'C2 Protocols', 'Cybersecurity', 'Research'],
    what: [
        'Classified centralized, decentralized, and P2P botnet architectures with resilience analysis',
        'Mapped covert C2 communication channels and protocol-level evasion mechanisms',
        'Surveyed detection strategies: traffic analysis, ML-based anomaly detection, and DNS sinkholes',
        'Proposed mitigation frameworks for enterprise and critical infrastructure environments',
    ],
    link: 'https://www.preprints.org/manuscript/202412.0660/v1',
    color: '#00b894',
};

/* ─── Standard project card ─── */
const ProjectCard = ({ project }) => (
    <article className="pf-card reveal" style={{ '--pf-color': project.color }}>
        <div className="pf-card__image">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="pf-card__overlay">
                <div className="pf-card__overlay-content">
                    <h4>What I did</h4>
                    <ul>
                        {project.what.map((w, i) => (
                            <li key={i}><span className="pf-dot" />{w}</li>
                        ))}
                    </ul>
                    <a
                        href={project.github}
                        className="btn btn-primary pf-card__btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
        <div className="pf-card__body">
            <div className="pf-card__header">
                <div>
                    <span className="pf-card__subtitle">{project.subtitle}</span>
                    <h3 className="pf-card__title">{project.title}</h3>
                </div>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-card__arrow"
                    aria-label={`View ${project.title} on GitHub`}
                >↗</a>
            </div>
            <p className="pf-card__desc">{project.description}</p>
            <div className="pf-card__tags">
                {project.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
            </div>
        </div>
    </article>
);

/* ─── Research paper card (full-width, no image) ─── */
const ResearchCard = ({ paper }) => (
    <article className="pf-card pf-card--research reveal" style={{ '--pf-color': paper.color }}>
        <div className="pf-research__banner">
            <div className="pf-research__grid-lines" aria-hidden="true" />
            <div className="pf-research__nodes" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className={`pf-node pf-node--${i + 1}`} />
                ))}
            </div>
            <div className="pf-research__label">
                <span className="pf-research__badge">Research Paper</span>
                <p className="pf-research__venue">{paper.venue}</p>
                <p className="pf-research__authors">{paper.authors}</p>
            </div>
        </div>

        <div className="pf-card__body pf-research__body">
            <div className="pf-card__header">
                <div>
                    <span className="pf-card__subtitle">{paper.subtitle}</span>
                    <h3 className="pf-card__title">{paper.title}</h3>
                </div>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-card__arrow"
                    aria-label="View paper on Preprints.org"
                >↗</a>
            </div>
            <p className="pf-card__desc">{paper.description}</p>

            <div className="pf-research__contributions">
                <h4>Key Contributions</h4>
                <ul>
                    {paper.what.map((w, i) => (
                        <li key={i}><span className="pf-dot" />{w}</li>
                    ))}
                </ul>
            </div>

            <div className="pf-research__footer">
                <div className="pf-card__tags">
                    {paper.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline pf-card__btn"
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
