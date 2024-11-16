import React from 'react';
import BlogCard from './Components/BlogCard';
import LLM from './assets/llm.webp';
import Model from './assets/Marchingcubes.png';
import Unet from './assets/Unet.jpg';

const Blog = () => {
    return (
        <div className="bg-[#0e1016] pb-24" id="blog">
            <h1 className="font-black text-[4rem] w-full leading-tight py-14 text-center">
                BLOGS AND ARTICLES
            </h1>
            <div className="py-10">
                <p className="font-serif text-2xl mt-2 text-center">
                    I write articles to reinforce my knowledge and help out
                    others who might be building something similar!
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:w-full min-w-96">
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
                <BlogCard
                    title={'Marching Cubes Algorithm'}
                    source={
                        'https://chiragjoshi-tech.hashnode.dev/marching-cubes-algorithm'
                    }
                    image={Model}
                    date={'November 15, 2024'}
                    text={
                        "The Marching Cubes algorithm, along with Lewiner's optimizations, revolutionized 3D surface reconstruction in modern computer graphics. This detailed article breaks down its core principles and thoroughly explains how it generates smooth, high-quality surfaces from complex volumetric data."
                    }
                />
                <BlogCard
                    title={'Exploring U-net Architecture'}
                    source={''}
                    image={Unet}
                    date={'November 14, 2024'}
                    text={
                        'U-Net architecture is a powerful convolutional neural network widely used for image segmentation tasks. Originally designed for biomedical applications, its symmetric structure and skip connections allow for precise localization, making it optimal for fine-grained segmentation.'
                    }
                />
            </div>
        </div>
    );
};

export default Blog;
