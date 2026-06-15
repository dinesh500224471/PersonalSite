import React from 'react';
import './cta.css';

const CTA = () => (
    <div className="cta__buttons">
        <a
            href="/Dinesh_Chhetri_Resume.pdf"
            download="Dinesh_Chhetri_Resume.pdf"
            className="btn btn-outline cta__resume-btn"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
        </a>
        <a href="#contact" className="btn btn-primary">
            Let's Connect
        </a>
    </div>
);

export default CTA;
