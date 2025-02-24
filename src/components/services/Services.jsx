import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

// Dynamic Data Structure for Services
const servicesData = [
    {
        title: "Information Assurance Learning Path",
        skills: [
            "Computer Networking",
            "Open Source Platform & Network Admin",
            "Risk Management in Information Systems",
            "Web Security",
            "Network Forensics",
            "Ethical Hacking & Offensive Security",
            "Incident Response"
        ]
    },
    {
        title: "Achievements",
        skills: [
            "Pre Security - TryHackMe",
            "Networking Essentials - Cisco",
            "Web Design for Everybody - Coursera",
            "Python for Everybody - Coursera",
            "Ethical Hacking for Beginners - SimpliLearn",
            "Cybersecurity Foundations - LinkedIn"
        ]
    },
    {
        title: "Research Platforms",
        skills: [
            "Windows 7, 8, 10",
            "Windows Server 2012 R2",
            "Kali Linux",
            "Ubuntu",
            "BackTrack"
        ]
    }
];

const Services = () => {
    return (
        <section id="services">
            <h5>What I Know</h5>
            <h2>Learning & Achievements</h2>

            <div className="container services__container">
                {servicesData.map((service, index) => (
                    <article key={index} className="service floating-card">
                        <div className="service__head">
                            <h3>{service.title}</h3>
                        </div>
                        <ul className="service__list">
                            {service.skills.map((skill, i) => (
                                <li key={i}>
                                    <BsCheckLg className="service__list-icon" />
                                    <p>{skill}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
