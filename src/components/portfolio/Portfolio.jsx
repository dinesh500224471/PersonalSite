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
        what: ['Set up isolated Windows XP VM', 'Captured & cracked NTLM hashes', 'Documented vulnerabilities & mitigations'],
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
        what: ['Designed interactive seat-map UI', 'Built payment simulation with receipt', 'Applied MVC architecture'],
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
        what: ['Cleaned & preprocessed 9M+ row dataset', 'EDA revealed malware pattern clusters', 'Generated heatmaps & correlation matrices'],
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
        what: ['Coded substitution & block ciphers', 'Simulated RSA key-pair generation', 'Built interactive encrypt/decrypt CLI'],
        github: 'https://github.com/dinesh500224471/Crytpography',
        color: '#7b2fff',
    },
];

const ProjectCard = ({ project }) => (
    <article className="pf-card reveal" style={{ '--pf-color': project.color }}>
        <div className="pf-card__image">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="pf-card__overlay">
                <div className="pf-card__overlay-content">
                    <h4>What I did</h4>
                    <ul>
                        {project.what.map((w, i) => (
                            <li key={i}>
                                <span className="pf-dot" />
                                {w}
                            </li>
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

const Portfolio = () => (
    <section id="portfolio">
        <span className="section__tag">Selected Work</span>
        <h2 className="section__title">Projects</h2>
        <div className="container portfolio__grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
    </section>
);

export default Portfolio;
