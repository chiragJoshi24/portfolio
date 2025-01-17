import PropTypes from 'prop-types';
import HeadingAnimation from '../Animations/HeadingAnimation';

const ProjectCard = ({
    name,
    liveLink,
    sourceCode,
    description,
    techStack,
    image,
    count,
}) => {
    return (
        <div className="bg-[#1a1d23] flex flex-col my-8 w-[550px] max-w-[85%] rounded-xl border-2 border-blue-50">
            <div className="flex flex-row mt-12 mb-8 justify-between items-center">
                <div className="text-4xl font-black ml-16">
                    <HeadingAnimation>{name}</HeadingAnimation>
                </div>

                <div className="mr-16 flex space-x-8">
                    <a
                        href={sourceCode}
                        target="_blank"
                        className="border-white border-2 py-3 px-4 rounded-full flex items-center justify-center"
                    >
                        <i className="fa-brands fa-github text-3xl"></i>
                    </a>
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            className="border-white border-2 p-4 rounded-full flex items-center justify-center "
                        >
                            <i
                                className="fa fa-link text-2xl"
                                aria-hidden="true"
                            ></i>
                        </a>
                    )}
                </div>
            </div>
            <div
                className={`flex flex-col justify-center items-center mb-4 lg:mb-8`}
            >
                <img
                    src={image}
                    alt={name}
                    className="rounded-lg mb-7 w-[80%] max-w-[80%]"
                />
                <div className="font-serif text-xl px-6 md:px-12 lg:px-16">
                    <p>
                        <HeadingAnimation delay={0.02}>
                            {description}
                        </HeadingAnimation>
                    </p>

                    <p
                        className={`my-8 font-serif text-lg font-semibold ${count % 2 === 0 ? 'text-left ' : 'text-right '}`}
                    >
                        <HeadingAnimation>{techStack}</HeadingAnimation>
                    </p>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    sourceCode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default ProjectCard;
