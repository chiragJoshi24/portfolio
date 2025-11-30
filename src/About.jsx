import Section from './Components/Section';
import HeadingAnimation from './Animations/HeadingAnimation';

const About = () => {
    return (
        <div
            className="bg-[#0E1016] flex flex-col items-center py-32"
            id="about"
        >
            <h1 className=" mt-10 font-black text-[4rem] max-w-7xl text-left leading-tight">
                <HeadingAnimation>
                    I MAKE BEAUTIFUL WEBSITES POWERFUL, AND CONTENT CAPTIVATING.
                </HeadingAnimation>
            </h1>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl m-20 ">
                <div className="w-full md:w-[60%]">
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation delay={0.03}>
                            I&apos;m a passionate developer and designer,
                            graduated in July 2024 with a Bachelor&apos;s degree
                            in Computer Science and Engineering. My journey in
                            the world of software development is driven by a
                            desire to create solutions that solve real-world
                            problems. I&apos;m an effective communicator and
                            team player, adept at collaborating with
                            multidisciplinary teams to achieve project goals.
                        </HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation>
                            I have previously worked on
                        </HeadingAnimation>{' '}
                        <span className="text-[#FACC15] font-bold">
                            <HeadingAnimation>
                                Web Development and Machine Learning.
                            </HeadingAnimation>
                        </span>{' '}
                        <HeadingAnimation>
                            I am enthusiastic about and regularly read up on
                        </HeadingAnimation>{' '}
                        <span className="text-[#FACC15] font-bold">
                            <HeadingAnimation>Neural Network</HeadingAnimation>
                        </span>{' '}
                        <HeadingAnimation>research.</HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation delay={0.03}>
                            Currently, I&apos;m working on exciting projects
                            that I can&apos;t wait to share. I thrive on
                            challenges and am always open to new opportunities
                            and collaborations.
                        </HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation>
                            I possess a solid understanding of core programming
                            principles and algorithms, with practical experience
                            through internships.
                        </HeadingAnimation>
                    </p>

                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation>
                            In addition to Software Developer, I am also a
                        </HeadingAnimation>{' '}
                        <span className="text-[#FACC15] font-bold">
                            <HeadingAnimation>
                                Musician, Competitive Coder & a Basketball
                                player.
                            </HeadingAnimation>
                        </span>{' '}
                    </p>
                </div>

                <div className="w-full md:w-[35%]">
                    <Section
                        title="Frontend Frameworks"
                        content="HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Bootstrap, Redux, Redux Toolkit, React Testing Library."
                    />

                    <Section
                        title="Backend Frameworks"
                        content="Django, Django REST Framework, FastAPI."
                    />

                    <Section
                        title="Languages"
                        content="C, C++, Python, JavaScript, Go."
                    />

                    <Section
                        title="Other Tools and Technologies"
                        content="Redis, Kubernetes, Git, GitHub, Postman."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
