import React, { useEffect, useRef } from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { MdScience } from 'react-icons/md';

const cards = [
    {
        icon: <FaAward />,
        title: 'Experience',
        sub: 'Security Analyst & IT Administrator',
        color: '#00d4ff',
    },
    {
        icon: <TbCertificate />,
        title: 'Certifications',
        sub: 'Az-900 · CEH · ISC2 CC · ITIL 4 · SIEM',
        color: '#7b2fff',
    },
    {
        icon: <VscFolderLibrary />,
        title: 'Projects',
        sub: 'WinXP Vuln · Malware Analysis · Data Breach · Cryptography',
        color: '#00d4ff',
    },
    {
        icon: <MdScience />,
        title: 'Research',
        sub: 'Botnet Technology: A Persistent Threat to Digital Infrastructure',
        color: '#7b2fff',
    },
];

const useTilt = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onMove = (e) => {
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width  - 0.5) * 18;
            const y = ((e.clientY - r.top)  / r.height - 0.5) * -18;
            el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
        };
        const onLeave = () => { el.style.transform = ''; };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, []);
    return ref;
};

const TiltCard = ({ icon, title, sub, color }) => {
    const ref = useTilt();
    return (
        <article ref={ref} className="about__card" style={{ '--card-color': color }}>
            <span className="about__card-icon">{icon}</span>
            <h5>{title}</h5>
            <small>{sub}</small>
        </article>
    );
};

const About = () => (
    <section id="about">
        <span className="section__tag">Discover More</span>
        <h2 className="section__title">About Me</h2>

        <div className="container">
            <div className="about__cards reveal">
                {cards.map((c, i) => <TiltCard key={i} {...c} />)}
            </div>

            <div className="about__bio reveal">
                <p>
                    I am a <strong>Cybersecurity Professional</strong> specializing in{' '}
                    <strong>Identity &amp; Access Management (IAM), SIEM, and Security Operations</strong>.
                    With expertise in <strong>Okta, Microsoft Entra ID (Azure AD), MFA, and SSO</strong>,
                    I focus on strengthening <strong>access controls, risk management, and compliance</strong>.
                </p>
                <p>
                    In my career, I have worked as a <strong>Security Analyst</strong> at{' '}
                    <strong>D &amp; D ERP Consulting</strong>, where I implemented <strong>RBAC, MFA</strong>,
                    and automated security processes. I have also served as an <strong>IT Administrator</strong>,
                    managing <strong>Active Directory</strong>, securing networks, and ensuring{' '}
                    <strong>99.5% uptime</strong>.
                </p>
                <p>
                    My goal is to become a <strong>Certified Security Professional</strong>, pursuing{' '}
                    <strong>CISSP, CISA, and advanced cybersecurity certifications</strong>.
                    I am passionate about <strong>threat intelligence, digital forensics</strong>,
                    continuously evolving in the <strong>cyber defense landscape</strong>.
                </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
);

export default About;
