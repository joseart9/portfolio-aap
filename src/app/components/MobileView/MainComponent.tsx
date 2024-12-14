import HeroSection from '@/app/components/MobileView/HeroSection';
import Aboutme from '@/app/components/MobileView/Aboutme';
import Experience from '@/app/components/MobileView/Experience';
import Projects from '@/app/components/MobileView/Projects';
import Footer from '@/app/components/Footer';
import Nabvar from '@/app/components/MobileView/Navbar';
import { useEffect, useState } from 'react';

export default function MainComponent() {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null, // Usa el viewport
            rootMargin: "0px",
            threshold: 0.1, // 60% de la sección visible para activarla
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    console.log(activeHash);

    return (
        <main className='min-h-screen'>
            <Nabvar activeHash={activeHash} />
            <div className='px-4 overflow-x-hidden '>
                <HeroSection />
                <Aboutme />
                <div className='h-[70px]' />
                <Experience />
                <div className='h-[70px]' />
                {/* <Projects /> */}
                <Footer />
            </div>
        </main>
    )
}