import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSent(false);
        setError(null);

        emailjs.sendForm(
            'service_s40ojcs',
            'template_eh9sppo',
            form.current,
            'Kg2rhkR8J5TfgshRJ'
        )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                form.current.reset();
            })
            .catch((error) => {
                console.error(error.text);
                setError('Failed to send message. Please try again.');
            });
    };

    return (
        <section id='contact'>
            <h5>Let's Connect</h5>
            <h2>Contact Me</h2>

           <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>dinez078@gmail.com</h5>
                        <a href="mailto:dinez078@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Dinesh Chhetri</h5>
                        <a href="https://www.linkedin.com/in/dinesh-chhetri" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                    </article>

                    <article className="contact__option">
                        <FaGithub className='contact__option-icon' />
                        <h4>GitHub</h4>
                        <h5>github.com/dinesh</h5>
                        <a href="https://github.com/dinesh500224471" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                    </article>
                </div>
                {/* End of contact options */}

                
            </div>
        </section>
    );
};

export default Contact;
