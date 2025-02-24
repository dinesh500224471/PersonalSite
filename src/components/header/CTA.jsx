import React from 'react';
import Resume from '../../assets/Resume-DineshChhetri.pdf'; // Update the filename if needed
import './cta.css';

const CTA = () => {
    return (
        <div className="cta__container">
            <a href={Resume} download className="btn btn-download">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    );
};

export default CTA;
