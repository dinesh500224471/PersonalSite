import React, { useState, useRef } from 'react';
import './cta.css';

const CTA = () => {
    const [downloading, setDownloading] = useState(false);
    const [done, setDone] = useState(false);
    const particlesRef = useRef(null);

    const spawnParticles = (el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const container = particlesRef.current;
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('span');
            p.className = 'dl-particle';
            const angle = (i / 18) * 360;
            const dist = 50 + Math.random() * 50;
            const x = Math.cos((angle * Math.PI) / 180) * dist;
            const y = Math.sin((angle * Math.PI) / 180) * dist;
            p.style.setProperty('--x', `${x}px`);
            p.style.setProperty('--y', `${y}px`);
            p.style.left = `${cx}px`;
            p.style.top = `${cy}px`;
            p.style.animationDelay = `${Math.random() * 0.2}s`;
            container.appendChild(p);
            setTimeout(() => p.remove(), 900);
        }
    };

    const handleDownload = (e) => {
        if (downloading) return;
        spawnParticles(e.currentTarget);
        setDownloading(true);

        setTimeout(() => {
            setDownloading(false);
            setDone(true);
            setTimeout(() => setDone(false), 2500);
        }, 1800);
    };

    return (
        <>
            <div ref={particlesRef} className="dl-particles-layer" aria-hidden="true" />
            <div className="cta__buttons">
                <button
                    type="button"
                    className={`btn btn-download${downloading ? ' downloading' : ''}${done ? ' done' : ''}`}
                    onClick={handleDownload}
                    aria-label="Download Resume"
                >
                    <span className="btn-download__icon">
                        {done ? '✓' : downloading ? '' : '↓'}
                    </span>
                    <span className="btn-download__text">
                        {done ? 'Downloaded!' : downloading ? 'Downloading…' : 'Download CV'}
                    </span>
                    {downloading && <span className="btn-download__bar" />}
                </button>

                <a href="#contact" className="btn btn-primary">
                    Let's Connect
                </a>
            </div>
        </>
    );
};

export default CTA;
