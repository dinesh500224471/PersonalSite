import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello, I'm</h5>
                <h1>Dinesh Chhetri</h1>
                

                {/* Experience Clouds on Left & Right */}
                <div className="experience-container">
                    <div className="experience-left">
                        <span>Az- 900 Cloud Fundamentals</span>
                        <span>ISC2 CC</span>
                        <span>Cisco Verified Ethical Hacker</span>
                        <span>Cloud Security</span><span>ITIL 4 Foundation</span>
                    </div>

                    {/* Floating Profile Image in the Middle */}
                    <div className="me">
                        <img src={ME} alt="Dinesh Chhetri" />
                    </div>

                    <div className="experience-right">
                        <span>IAM Security, MDM, MFA, Okta, SCCM</span>
                        <span>Risk Assessment, Risk Mitigation, Containment</span>
                        <span>Vulnerability Analysis, Log Analysis and Detection</span>
                        
                    </div>
                </div>

                {/* CTA Buttons Below Image */}
                <div className="cta-wrapper">
                    <CTA />
                </div>

               

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
