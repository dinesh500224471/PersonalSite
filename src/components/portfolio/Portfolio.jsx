import React, { useState } from 'react';
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
        subtitle: 'Cain & Abel Vulnerability Demo',
        description: 'Demonstrated end-to-end user account creation and password cracking on a Windows XP VM using Cain & Abel. Exposed legacy OS security weaknesses and documented exploit techniques for educational purposes.',
        tags: ['Windows XP', 'Cain & Abel', 'Password Cracking', 'VM Lab'],
        what: ['Set up isolated Windows XP virtual machine', 'Created target user accounts with weak credentials', 'Used Cain & Abel to capture & crack NTLM hashes', 'Documented vulnerabilities and mitigation steps'],
        github: 'https://github.com/dinesh500224471/Windows-XP_Cain-Abel',
        color: '#00d4ff',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cinema Ticket Machine',
        subtitle: 'Java OOP Project – NetBeans IDE',
        description: 'A fully-functional Java-based cinema ticketing system with interactive seat selection, pricing logic, and payment simulation. Developed using OOP principles and event-driven programming in NetBeans.',
        tags: ['Java', 'OOP', 'NetBeans', 'GUI', 'Simulation'],
        what: ['Designed seat-map UI with real-time selection', 'Implemented pricing tiers (adult/child/senior)', 'Built payment simulation with receipt generation', 'Applied MVC architecture and Java Swing'],
        github: 'https://github.com/dinesh500224471/CinemaTicketMachine',
        color: '#7b2fff',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Microsoft Malware Dataset Analysis',
        subtitle: 'Data Science · Python · Jupyter',
        description: 'Performed deep data-science analysis on the Microsoft Malware Prediction dataset. Used Python (pandas, matplotlib, seaborn) to identify malware distribution patterns and produce interactive visualizations.',
        tags: ['Python', 'Pandas', 'Jupyter', 'Data Viz', 'Cybersecurity'],
        what: ['Cleaned & preprocessed 9M+ row dataset', 'Conducted EDA to find malware pattern clusters', 'Generated heatmaps, bar charts, correlation matrices', 'Derived risk insights for enterprise threat models'],
        github: 'https://github.com/dinesh500224471/Microsoft-Malware',
        color: '#00d4ff',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cryptography Algorithms',
        subtitle: 'Python Implementation',
        description: 'Implemented classical and modern cryptographic algorithms in Python — including Caesar, Vigenère, AES-like block cipher, and RSA key generation — to demonstrate encryption/decryption concepts.',
        tags: ['Python', 'Cryptography', 'AES', 'RSA', 'Security'],
        what: ['Coded Caesar & Vigenère substitution ciphers', 'Implemented symmetric block encryption logic', 'Simulated RSA key-pair generation & exchange', 'Built interactive CLI for encrypt/decrypt demos'],
        github: 'https://github.com/dinesh500224471/Crytpography',
        color: '#7b2fff',
    },
];

const ProjectCard = ({ project }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`pf-card${flipped ? ' flipped' : ''}`}
            onClick={() => setFlipped(f => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
            aria-label={`${project.title} – click to ${flipped ? 'go back' : 'see details'}`}
            style={{ '--pf-color': project.color }}
        >
            <div className="pf-card__inner">
                {/* ── Front ── */}
                <div className="pf-card__face pf-card__front">
                    <div className="pf-card__img">
                        <img src={project.image} alt={project.title} />
                        <div className="pf-card__img-overlay" />
                    </div>
                    <div className="pf-card__front-body">
                        <h3 className="pf-card__title">{project.title}</h3>
                        <p className="pf-card__subtitle">{project.subtitle}</p>
                        <div className="pf-card__tags">
                            {project.tags.slice(0, 3).map((t, i) => (
                                <span className="tag" key={i}>{t}</span>
                            ))}
                        </div>
                        <span className="pf-card__flip-hint">Tap to see what I did →</span>
                    </div>
                </div>

                {/* ── Back ── */}
                <div className="pf-card__face pf-card__back">
                    <div className="pf-card__back-header">
                        <h3>{project.title}</h3>
                        <p className="pf-card__back-desc">{project.description}</p>
                    </div>
                    <div className="pf-card__what">
                        <h4>What I Did</h4>
                        <ul>
                            {project.what.map((w, i) => (
                                <li key={i}>
                                    <span className="pf-card__bullet" />
                                    {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pf-card__back-tags">
                        {project.tags.map((t, i) => (
                            <span className="tag" key={i}>{t}</span>
                        ))}
                    </div>
                    <a
                        href={project.github}
                        className="btn btn-primary pf-card__github"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => (
    <section id="portfolio">
        <span className="section__tag">My Recent Projects</span>
        <h2 className="section__title">Portfolio</h2>
        <p className="portfolio__hint">Click any card to see what I built</p>

        <div className="container portfolio__container">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
    </section>
);

export default Portfolio;
