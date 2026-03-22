import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';
import { HiAcademicCap, HiChip, HiTerminal } from 'react-icons/hi';

const servicesData = [
    {
        icon: <HiAcademicCap />,
        title: 'Information Assurance',
        color: '#00d4ff',
        skills: [
            'Computer Networking',
            'Open Source Platform & Network Admin',
            'Risk Management in Information Systems',
            'Web Security',
            'Network Forensics',
            'Ethical Hacking & Offensive Security',
            'Incident Response',
        ],
    },
    {
        icon: <HiChip />,
        title: 'Achievements',
        color: '#7b2fff',
        skills: [
            'Pre Security – TryHackMe',
            'Networking Essentials – Cisco',
            'Web Design for Everybody – Coursera',
            'Python for Everybody – Coursera',
            'Ethical Hacking for Beginners – SimpliLearn',
            'Cybersecurity Foundations – LinkedIn',
        ],
    },
    {
        icon: <HiTerminal />,
        title: 'Research Platforms',
        color: '#00d4ff',
        skills: [
            'Windows 7, 8, 10',
            'Windows Server 2012 R2',
            'Kali Linux',
            'Ubuntu',
            'BackTrack',
        ],
    },
];

const Services = () => (
    <section id="services">
        <span className="section__tag">What I Know</span>
        <h2 className="section__title">Learning &amp; Achievements</h2>

        <div className="container services__container">
            {servicesData.map((service, index) => (
                <article
                    key={index}
                    className="svc-card reveal"
                    style={{ '--svc-color': service.color, animationDelay: `${index * 0.1}s` }}
                >
                    <div className="svc-card__header">
                        <span className="svc-card__icon">{service.icon}</span>
                        <h3 className="svc-card__title">{service.title}</h3>
                    </div>

                    <ul className="svc-card__list">
                        {service.skills.map((skill, i) => (
                            <li key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                                <BsCheckLg className="svc-card__check" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </section>
);

export default Services;
