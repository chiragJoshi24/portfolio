import ProjectCard from './Components/ProjectCard';
import OpenAI from './assets/NeuralNet.jpeg';
import Nifti from './assets/niftito3d.png';
import Portfolio from './assets/portfolio.jpg';
import YoutubeSummarizer from './assets/youtubeSummarizer.png';
import HeadingAnimation from './Animations/HeadingAnimation';

const Projects = () => {
    return (
        <div
            className="bg-[#0E1016] flex flex-col items-center pb-20"
            id="projects"
        >
            <h1 className="font-black text-[4rem] w-full leading-tight py-14 text-center">
                <HeadingAnimation>PROJECTS</HeadingAnimation>
            </h1>
            <div className="flex flex-wrap justify-center gap-8 max-w-[90%] bg-[#0E1016] overflow-hidden">
                <ProjectCard
                    name={'Personalized ChatGPT'}
                    techStack={
                        'Flask\u00A0 Firebase\u00A0 React\u00A0 TailwindCSS'
                    }
                    description={
                        'This project features a chatbot designed for question answering, utilizing Cohere and Google Gemini APIs for context retrieval and response generation. The backend is developed with the Python Flask framework and is deployed on Render.com. Firebase is integrated to handle user authentication securely.'
                    }
                    liveLink={'https://personalgpt-3cv0.onrender.com/'}
                    image={OpenAI}
                    sourceCode={
                        'https://github.com/chiragJoshi24/PersonalChatGPT'
                    }
                    count={1}
                />
                <ProjectCard
                    name={'Portfolio Website'}
                    techStack={'HTML\u00A0 TailwindCSS\u00A0 ReactJS'}
                    description={
                        'The website includes interactive UI elements that enhance user engagement and provide a dynamic experience. It utilizes modern web technologies to ensure smooth, responsive, and efficient performance across devices. The design offers customization options for modifications and scalability.'
                    }
                    liveLink={'https://chiragjoshi24.github.io/portfolio'}
                    image={Portfolio}
                    sourceCode={'https://github.com/chiragJoshi24/Portfolio'}
                    count={2}
                />
                <ProjectCard
                    name={'NIfTI To 3D Converter'}
                    techStack={
                        'Python\u00A0 U-net\u00A0 MatPlotlib\u00A0 Numpy'
                    }
                    description={
                        'Reconstructed 3D organ and tissue images from 2D medical data using U-Net with custom preprocessing and augmentation. Created tools for 3D volume reconstruction, mesh generation, and STL export of segmented organs. Developed an end-to-end medical imaging pipeline for 3D CT scan processing, segmentation, and visualization.'
                    }
                    // liveLink={'https://chiragjoshi24.github.io/Nifti-to-3D'}
                    image={Nifti}
                    sourceCode={'https://github.com/chiragJoshi24/Nifti-to-3D'}
                    count={3}
                />
                <ProjectCard
                    name={'Summarize Youtube Videos'}
                    techStack={'HTML\u00A0 CSS\u00A0 JavaScript\u00A0 Flask\u00A0 Gemini'}
                    description={
                        'Chrome extension designed to summarize YouTube videos quickly. Allows users to obtain a summary of a YouTube video in seconds, either by using the URL of the currently active tab or by inputting a specific video link. This project leverages APIs like Google Gemini and incorporates a user-friendly interface for seamless interaction. '
                    }
                    image={YoutubeSummarizer}
                    sourceCode={
                        'https://github.com/chiragJoshi24/Summarize_Youtube_Videos'
                    }
                    count={4}
                />
            </div>
        </div>
    );
};
export default Projects;
