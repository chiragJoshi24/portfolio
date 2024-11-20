import React from 'react';
import passportPhoto from './assets/my-passport-photo.jpg';
import GlideAndFadeFromBottom from './Animations/GlideAndFadeFromBottom';
import './index.css';

const Hero = () => {
    return (
        <div className="heroContainer" id="home">
            <div className="flex w-full justify-between mt-16">
                <GlideAndFadeFromBottom delay={1.8}>
                    <a
                        href="https://drive.google.com/file/d/1Wb_YvOK3b5ftftEKnptR8NA3MqphaJGS/view?usp=sharing"
                        target="_blank"
                        className="ml-32 left-0 border-solid border-white border-2 py-2 px-4 rounded"
                    >
                        VIEW RESUME
                    </a>
                </GlideAndFadeFromBottom>

                <div className="flex mr-32">
                    <GlideAndFadeFromBottom delay={1.8}>
                        <a
                            href="https://github.com/chiragJoshi24"
                            target="_blank"
                            className="font-medium px-4 py-2"
                        >
                            GITHUB
                        </a>
                        <a
                            href="https://www.linkedin.com/in/chirag-joshi-67b464216/"
                            target="_blank"
                            className="font-medium px-4 py-2"
                        >
                            LINKEDIN
                        </a>
                        <a
                            href="https://x.com/ChiragJ72010984"
                            target="_blank"
                            className="font-medium px-4 py-2"
                        >
                            TWITTER
                        </a>
                    </GlideAndFadeFromBottom>
                </div>
            </div>

            <div className="font-serif flex flex-col justify-center text-center h-[70vh] text-9xl font-black">
                <div className="items-center">
                    <GlideAndFadeFromBottom delay={1.2}>
                        Chirag <br /> Joshi
                    </GlideAndFadeFromBottom>

                    <div className="flex justify-center items-center">
                        <GlideAndFadeFromBottom delay={0.6}>
                            <img
                                src={passportPhoto}
                                alt="My Passport Photo"
                                className="rounded-[27%] max-w-[243px]"
                                width="243"
                            />
                        </GlideAndFadeFromBottom>
                    </div>
                </div>
            </div>

            <div className="absolute my-20 flex w-full justify-between bottom-0">
                <div className="ml-32 font-medium text-lg w-96">
                    <GlideAndFadeFromBottom delay={1.8}>
                        Full Stack Developer, Product Designer & Ex-Frontend
                        Intern at
                        <a
                            href="https://www.grappl.tech/"
                            target="_blank"
                            className="p-2"
                        >
                            <u>Grappl.tech</u>
                        </a>
                    </GlideAndFadeFromBottom>
                </div>
                <div className="mr-32 font-medium text-lg w-96 hidden md:inline text-right">
                    <GlideAndFadeFromBottom delay={1.8}>
                        Focused on interfaces and experiences, working remotely
                        in India.
                    </GlideAndFadeFromBottom>
                </div>
            </div>
        </div>
    );
};

export default Hero;
