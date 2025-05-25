import passportPhoto from './assets/my-passport-photo.jpg';
import GlideY from './Animations/GlideY';
import './index.css';

const Hero = () => {
    return (
        <div className="heroContainer" id="home">
            <div className="flex w-full justify-between mt-16">
                <GlideY delay={1.8}>
                    <a
                        href="https://drive.google.com/file/d/1Wb_YvOK3b5ftftEKnptR8NA3MqphaJGS/view?usp=sharing"
                        target="_blank"
                        className="ml-32 left-0 border-solid border-white border-2 py-2 px-4 rounded"
                    >
                        VIEW RESUME
                    </a>
                </GlideY>

                <div className="flex mr-32">
                    <GlideY delay={1.8}>
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
                    </GlideY>
                </div>
            </div>

            <div className="font-serif flex flex-col justify-center text-center h-[70vh] text-9xl font-black">
                <div className="items-center">
                    <GlideY delay={1.2}>
                        Chirag <br /> Joshi
                    </GlideY>

                    <div className="flex justify-center items-center">
                        <GlideY delay={0.6}>
                            <img
                                src={passportPhoto}
                                alt="My Passport Photo"
                                className="rounded-[27%] max-w-[243px]"
                                width="243"
                            />
                        </GlideY>
                    </div>
                </div>
            </div>

            <div className="absolute my-20 flex w-full justify-between bottom-0">
                <div className="ml-32 font-medium text-lg w-96">
                    <GlideY delay={1.8}>
                        Optimizing systems as a Software Developer at
                        <a
                            href="https://www.instaastro.in/"
                            target="_blank"
                            className="p-2"
                        >
                            <u>Instaastro</u>
                        </a>
                    </GlideY>
                </div>
                <div className="mr-32 font-medium text-lg w-96 hidden md:inline text-right">
                    <GlideY delay={1.8}>
                        Building interfaces and crafting user experiences remotely from India.
                    </GlideY>
                </div>
            </div>
        </div>
    );
};

export default Hero;
