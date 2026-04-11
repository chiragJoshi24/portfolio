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
                    I BUILD FAST, RELIABLE BACKEND SYSTEMS THAT SCALE.
                </HeadingAnimation>
            </h1>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl m-20 ">
                <div className="w-full md:w-[60%]">
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation delay={0.03}>
                            I&apos;m a backend-focused Software Developer at
                            InstaAstro, where I optimize systems handling ~900
                            req/s at peak. I graduated with a B.Tech in
                            Computer Science from MAIT in June 2024 and
                            qualified GATE CS 2025 in the top 5%.
                        </HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation>
                            My day-to-day revolves around
                        </HeadingAnimation>{' '}
                        <span className="text-[#FACC15] font-bold">
                            <HeadingAnimation>
                                performance optimization, caching, CI/CD, and
                                building production-grade tooling.
                            </HeadingAnimation>
                        </span>{' '}
                        <HeadingAnimation>
                            I&apos;ve cut database load from 97% to 20%,
                            slashed CI/CD times from 40 min to 5 min, and built
                            a custom APM suite used in production.
                        </HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation delay={0.03}>
                            I care about writing honest, measurable code &mdash;
                            not over-engineered abstractions. I&apos;m always
                            looking for opportunities to push systems harder and
                            learn from real production traffic.
                        </HeadingAnimation>
                    </p>
                    <p className="leading-snug font-serif text-2xl mb-8">
                        <HeadingAnimation>
                            Outside of work, I&apos;m also a
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
                        title="Languages"
                        content="Python, Go, C, C++, JavaScript."
                    />

                    <Section
                        title="Backend & Infrastructure"
                        content="Django, DRF, FastAPI, Redis, PostgreSQL, Kubernetes."
                    />

                    <Section
                        title="DevOps & Tools"
                        content="Docker, GitLab CI, Kaniko, Git, Hadolint, Postman."
                    />

                    <Section
                        title="Frontend"
                        content="React, Tailwind CSS, HTML, CSS."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
