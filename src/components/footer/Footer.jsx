import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import { AiOutlineYoutube, AiOutlineSkype } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import { ImBlogger2 } from 'react-icons/im';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                {/* Brand Logo */}
                <a href="#" className='footer__logo'>Dinesh Chhetri</a>

                {/* Navigation Links */}
                <ul className='footer__nav'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Social Links */}
                <div className="footer__socials">
                    <a href="https://www.facebook.com/dinesh.chhetri.75286/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/in/dinesh-chhetri/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://github.com/dinesh500224471" target="_blank" rel="noopener noreferrer"><FaGithubAlt /></a>
                    
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="footer__bottom">
                <small>Designed & Developed by <b>Dinesh Chhetri</b></small>
            </div>
        </footer>
    );
}

export default Footer;
