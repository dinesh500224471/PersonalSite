import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
        const id = requestAnimationFrame(raf);
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            }),
            { threshold: 0.1 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <main>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Skills />
            <Certifications />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
