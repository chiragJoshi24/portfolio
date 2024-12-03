import React from 'react';
import Glide from './Animations/Glide';
import HeadingAnimation from './Animations/HeadingAnimation';
import BlogCard from './Components/BlogCard';
import LLM from './assets/llm.webp';
import Model from './assets/Marchingcubes.png';
import Unet from './assets/Unet.jpg';

const Blog = () => {
    const mobile = window.innerWidth <= 1024;
    return (
        <div className="bg-[#0e1016] pb-24 w-full" id="blog">
            <h1 className="font-black text-[4rem] leading-tight py-14 text-center">
                <HeadingAnimation> BLOGS AND ARTICLES </HeadingAnimation>
            </h1>
            <div className="py-10">
                <p className="font-serif text-2xl mt-2 text-center">
                    <HeadingAnimation delay={0.03}>
                        I write articles to reinforce my knowledge and help out
                        others who might be building something similar!
                    </HeadingAnimation>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:w-full min-w-96">
                <Glide
                    delay={0.6}
                    visible={0.5}
                    time={0.5}
                    transitionDistance={mobile ? -100 : 100}
                >
                    <BlogCard
                        title={'The Science behind LLMs'}
                        source={
                            'https://chiragjoshi-tech.hashnode.dev/the-science-behind-large-language-models'
                        }
                        image={LLM}
                        date={'November 10, 2024'}
                        text={
                            'An insight into how Large Language Models (LLMs) make use of vast datasets and neural networks to generate responses. Despite their impressive abilities, LLMs struggle with basic tasks like counting due to limitations in symbolic reasoning and lack of understanding of actual logic.'
                        }
                    />
                </Glide>
                <Glide
                    delay={0.3}
                    visible={0.5}
                    time={0.5}
                    transitionDistance={mobile ? -100 : 100}
                >
                    <BlogCard
                        title={'Marching Cubes: Insights into 3D Renderings'}
                        source={
                            'https://chiragjoshi-tech.hashnode.dev/marching-cubes-insights-into-3d-renderings'
                        }
                        image={Model}
                        date={'November 18, 2024'}
                        text={
                            'The Marching Cubes algorithm, revolutionized 3D surface reconstruction in modern computer graphics. This article breaks down its core principles and thoroughly explains how it generates smooth, high-quality surfaces from complex volumetric data.'
                        }
                    />
                </Glide>
                <Glide
                    visible={0.5}
                    time={0.5}
                    transitionDistance={mobile ? -100 : 100}
                >
                    <BlogCard
                        title={'Exploring U-net Architecture'}
                        source={
                            'https://chiragjoshi-tech.hashnode.dev/exploring-unet-architecture'
                        }
                        image={Unet}
                        date={'December 4, 2024'}
                        text={
                            'U-Net architecture is a powerful convolutional neural network widely used for image segmentation tasks. Originally designed for biomedical applications, its symmetric structure and skip connections allow for precise localization, making it optimal for fine-grained segmentation.'
                        }
                    />
                </Glide>
            </div>
        </div>
    );
};

export default Blog;
