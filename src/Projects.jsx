import ProjectCard from './Components/ProjectCard';
import RealTimeStreaming from './assets/streaming.jpg';
import DjangoTracekit from './assets/django-tracekit.jpg';
import Nifti from './assets/niftito3d.png';
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
                    name={'Django Tracekit'}
                    techStack={
                        'Python\u00A0 Django\u00A0 Redis\u00A0'
                    }
                    description={
                        'A production-safe, lightweight Django APM module. Tracks CPU and memory usage per request step, logs API queries, and supports time-window targeting. Kubernetes-aware with zero frontend dependency — a practical alternative to django-silk for production environments.'
                    }
                    image={DjangoTracekit}
                    sourceCode={
                        'https://github.com/chiragJoshi24/django-tracekit'
                    }
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
                    name={'Real-Time Streaming'}
                    techStack={
                        'Go\u00A0 Redis\u00A0 PostgreSQL\u00A0 WebSockets'
                    }
                    description={
                        'A high-performance real-time streaming platform built with Go for concurrent connection handling, Redis pub/sub for message fanout, and PostgreSQL for persistent storage. Designed to handle thousands of simultaneous connections with low-latency delivery.'
                    }
                    image={RealTimeStreaming}
                    sourceCode={
                        'https://github.com/chiragJoshi24/realtime-streaming-platform'
                    }
                    count={1}
                />
            </div>
        </div>
    );
};
export default Projects;
