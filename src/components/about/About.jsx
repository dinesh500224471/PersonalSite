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
    I am a <strong>Cybersecurity Professional</strong> specializing in 
    <strong>Identity & Access Management (IAM), SIEM, and Security Operations</strong>.
    With expertise in <strong>Okta, Microsoft Entra ID (Azure AD), MFA, and SSO</strong>, 
    I focus on strengthening <strong>access controls, risk management, and compliance</strong>.
</p>

<p>
    In my career, I have worked as a <strong>Security Analyst</strong> at 
    <strong>D & D ERP Consulting</strong>, where I implemented <strong>RBAC, MFA</strong>, 
    and automated security processes. I have also served as an <strong>IT Administrator</strong>, 
    managing <strong>Active Directory</strong>, securing networks, and ensuring <strong>99.5% uptime</strong>. 
    My contributions in <strong>malware analysis, data breach detection, and botnet mitigation</strong> 
    have been recognized in academic research.
</p>

<p>
    My goal is to become a <strong>Certified Security Professional</strong>, pursuing 
    <strong>CISSP, CISA, and advanced cybersecurity certifications</strong>. 
    I am passionate about <strong>threat intelligence, digital forensics</strong>, 
    continuously evolving in the <strong>cyber defense landscape</strong>.
</p>


                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
