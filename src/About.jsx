import React from 'react';
import Section from './Components/Section';
const About = () => {
    return (
        <div
            className="bg-[#0E1016] flex flex-col items-center py-32"
            id="about"
        >
            <h1 className=" mt-10 font-black text-[4rem] max-w-7xl text-left leading-tight">
                I MAKE BEAUTIFUL WEBSITES POWERFUL, AND CONTENT CAPTIVATING.
            </h1>

            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl m-20 ">
                <div className="w-full md:w-[60%]">
                    <p className="leading-snug font-serif text-2xl mb-8">
                        I'm a passionate developer and designer, graduated in
                        July 2024 with a Bachelor's degree in Computer Science
                        and Engineering. My journey in the world of software
                        development is driven by a desire to create solutions
                        that solve real-world problems. I'm an effective
                        communicator and team player, adept at collaborating
                        with multidisciplinary teams to achieve project goals.
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        I have previously worked on{' '}
                        <span className="text-[#FACC15] font-bold">
                            Web Development and Machine Learning.
                        </span>{' '}
                        I am enthusiastic about and regularly read up on{' '}
                        <span className="text-[#FACC15] font-bold">
                            Neural Network
                        </span>{' '}
                        research.
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        Currently, I'm working on exciting projects that I can't
                        wait to share. I thrive on challenges and am always open
                        to new opportunities and collaborations.
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        I possess a solid understanding of core programming
                        principles and algorithms, with practical experience
                        through internships.
                    </p>

                    <p className="leading-snug font-serif text-2xl mb-8">
                        In addition to Software Developer, I am also a{' '}
                        <span className="text-[#FACC15] font-bold">
                            Musician, Competitive Coder & a Basketball player.
                        </span>{' '}
                    </p>
                </div>

                <div className="w-full md:w-[35%]">
                    <Section
                        title="Frontend Tools & Frameworks"
                        content="HTML, CSS, JavaScript (ES6+), ReactJS, Tailwind CSS, Bootstrap, Redux, Redux Toolkit, React Testing Library."
                    />

                    <Section
                        title="Backend Tools"
                        content="MongoDB, NodeJS, ExpressJS, Postman, HTTP Toolkit, REST APIs."
                    />

                    <Section
                        title="Languages"
                        content="C, C++, Python, JavaScript, MySQL, GraphQL"
                    />

                    <Section
                        title="Other Tools and Technologies"
                        content="Git, GitHub, Linux, Microsoft Office Suite."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
