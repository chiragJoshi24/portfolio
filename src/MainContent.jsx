import { useState, useEffect } from 'react';
import Hero from './Hero';
import Navbar from './Components/PCNavbar';
import Foldable from './Components/MobileNavbar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import WorkExperience from './WorkExperience';
import ContactInfo from './ContactInfo';

const MainContent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1390);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1390);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Hero />
            {isMobile ? <Foldable /> : <Navbar />}
            <About />
            <Blog />
            <Projects />
            <WorkExperience />
            <ContactInfo />
        </>
    );
};

export default MainContent;
