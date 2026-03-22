import React, { useEffect, useRef } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';

const CERTS = [
    'Az-900 Cloud Fundamentals',
    'ISC2 CC',
    'Cisco Ethical Hacker',
    'Cloud Security',
    'ITIL 4 Foundation',
    'IAM & Okta',
    'SIEM Sentinel',
    'MFA & SSO',
];

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.6 ? '#00d4ff' : '#7b2fff';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 6;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < 120; i++) particles.push(new Particle());

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 90) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 90) * 0.12;
                        ctx.strokeStyle = '#00d4ff';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-canvas" />;
};

const Header = () => {
    return (
        <header id="home" className="header">
            <ParticleCanvas />

            {/* Ambient glow orbs */}
            <div className="orb orb--cyan" />
            <div className="orb orb--purple" />

            <div className="container header__container">
                {/* Text side */}
                <div className="header__text">
                    <span className="header__greeting">Hello, I'm</span>
                    <h1 className="header__name">
                        Dinesh<br />
                        <span className="text-gradient">Chhetri</span>
                    </h1>
                    <p className="header__subtitle">
                        Cybersecurity Professional &bull; IAM Specialist &bull; Security Analyst
                    </p>

                    {/* Cert tags */}
                    <div className="header__tags">
                        {CERTS.map((c, i) => (
                            <span className="tag" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                                {c}
                            </span>
                        ))}
                    </div>

                    <CTA />
                </div>

                {/* 3D profile side */}
                <div className="header__image-wrapper">
                    <div className="header__image-scene">
                        <div className="header__image-3d">
                            <div className="header__image-glow" />
                            <div className="header__image-ring ring1" />
                            <div className="header__image-ring ring2" />
                            <div className="header__image-frame">
                                <img src={ME} alt="Dinesh Chhetri" />
                            </div>
                        </div>
                    </div>
                    {/* Floating orbit labels */}
                    <div className="orbit-label ol-1">IAM</div>
                    <div className="orbit-label ol-2">SIEM</div>
                    <div className="orbit-label ol-3">Pentesting</div>
                    <div className="orbit-label ol-4">Cloud</div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#about" className="scroll-indicator" aria-label="Scroll down">
                <div className="scroll-indicator__line" />
                <span>Scroll</span>
            </a>
        </header>
    );
};

export default Header;
