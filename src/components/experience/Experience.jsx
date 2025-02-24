import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Technical Expertise</h5>
            <h2>Experience & Skills</h2>

            <div className="container experience__container">
                {/* Programming Languages */}
                <div className="experience__category">
                    <h3>Programming & Scripting</h3>
                    <div className="experience__content">
                        {["Python", "C++", "JavaScript", "SQL"].map((skill, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{skill}</h4>
                                    <small className='text-light'>{index === 0 ? "Intermediate" : "Experienced"}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Cybersecurity Tools */}
                <div className="experience__category">
                    <h3>Cybersecurity & Pentesting</h3>
                    <div className="experience__content">
                        {["Nmap", "Wireshark", "Metasploit", "Burp Suite"].map((tool, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{tool}</h4>
                                    <small className='text-light'>{index < 2 ? "Experienced" : "Intermediate"}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* IAM & Cloud Security */}
                <div className="experience__category">
                    <h3>IAM & Cloud Security</h3>
                    <div className="experience__content">
                        {["Okta", "Azure AD", "SIEM (Microsoft Sentinel)", "MFA & SSO"].map((tech, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{tech}</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
