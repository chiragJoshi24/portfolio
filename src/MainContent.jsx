import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import WorkExperience from './WorkExperience';
import ContactInfo from './ContactInfo';

const MainContent = () => {
    return (
        <>
            <Hero />
            <Navbar />
            <About />
            <Blog />
            <Projects />
            <WorkExperience />
            <ContactInfo />
        </>
    );
};

export default MainContent;
