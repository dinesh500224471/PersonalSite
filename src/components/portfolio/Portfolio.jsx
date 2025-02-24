import React from 'react';
import './portfolio.css';

// Images (Replace with actual screenshots of your projects)
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.png';

// Projects Data (Based on Your GitHub Repositories)
const projects = [
    {
        id: 1,
        image: IMG1,
        title: 'Windows XP - Password Cracking with Cain & Abel',
        description: 'Demonstrating the process of user account creation and password cracking using Cain & Abel on a Windows XP VM.',
        github: 'https://github.com/dinesh500224471/Windows-XP_Cain-Abel',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cinema Ticket Machine (Java Project)',
        description: 'A Java-based cinema ticket machine simulation developed in NetBeans IDE with seat selection and payment simulation.',
        github: 'https://github.com/dinesh500224471/CinemaTicketMachine',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Microsoft Malware Dataset Analysis',
        description: 'Data science analysis on Microsoft Malware dataset using Jupyter Notebook and Python for visualization.',
        github: 'https://github.com/dinesh500224471/Microsoft-Malware',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cryptography Algorithms - Python Implementation',
        description: 'Implementing encryption and decryption using cryptography algorithms in Python.',
        github: 'https://github.com/dinesh500224471/Crytpography',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {projects.map(({ id, image, title, description, github }) => (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="portfolio__item-cta">
                            <a href={github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
