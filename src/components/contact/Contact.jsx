import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const options = [
    {
        icon: <HiOutlineMail />,
        label: 'Email',
        value: 'dinez078@gmail.com',
        link: 'mailto:dinez078@gmail.com',
        cta: 'Send a message',
        color: '#00d4ff',
    },
    {
        icon: <TbBrandLinkedin />,
        label: 'LinkedIn',
        value: 'Dinesh Chhetri',
        link: 'https://www.linkedin.com/in/dinesh-chhetri',
        cta: 'Connect on LinkedIn',
        color: '#7b2fff',
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        value: 'dinesh500224471',
        link: 'https://github.com/dinesh500224471',
        cta: 'Visit My GitHub',
        color: '#00d4ff',
    },
];

const Contact = () => (
    <section id="contact">
        <span className="section__tag">Let's Connect</span>
        <h2 className="section__title">Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                {options.map((opt, i) => (
                    <article
                        key={i}
                        className="contact__card reveal"
                        style={{ '--ct-color': opt.color }}
                    >
                        <span className="contact__card-icon">{opt.icon}</span>
                        <h4 className="contact__card-label">{opt.label}</h4>
                        <p className="contact__card-value">{opt.value}</p>
                        <a
                            href={opt.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__card-link"
                        >
                            {opt.cta} →
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Contact;
