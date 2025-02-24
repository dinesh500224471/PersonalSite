import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Discover More</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Dinesh Chhetri" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Security Analyst & IT Administrator</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certifications</h5>
                            <small>Az-900, Cisco Verified Ethical Hacker, ISC2 Certified in Cybersecurity, SIEM</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>Windows- XP Vulnerability Crack, Microsoft Malware Analysis | Data Analyst, Data Breach on Organization | Data Analyst</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Research Paper</h5>
                            <small>Botnet Technology: A Persistent Threat to Digital Infrastructure</small>
                        </article>
                    </div>

                    <p>
                        I am a **Cybersecurity Professional** specializing in **Identity & Access Management (IAM), SIEM, and Security Operations**.
                        With expertise in **Okta, Microsoft Entra ID (Azure AD), MFA, and SSO**, I focus on strengthening **access controls, risk management, and compliance**.
                        
                    </p>

                    <p>
                        In my career, I have worked as a **Security Analyst** at **D & D ERP Consulting**, where I implemented **RBAC, MFA**, and automated security processes.
                        I have also served as an **IT Administrator**, managing Active Directory, securing networks, and ensuring **99.5% uptime**.
                        My contributions in **malware analysis, data breach detection, and botnet mitigation** have been recognized in academic research.
                    </p>

                    <p>
                        My goal is to become a **Certified Security Professional**, pursuing **CISSP, CISA, and advanced cybersecurity certifications**.
                        I am passionate about **threat intelligence, digital forensics**, continuously evolving in the **cyber defense landscape**.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
