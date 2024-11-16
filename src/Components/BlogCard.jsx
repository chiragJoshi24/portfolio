import React from 'react';

const BlogCard = ({ title, source, text, image, date }) => {
    return (
        <div className="bg-[#1a1d23] flex flex-col md:my-8 justify-center items-center w-full sm:w-[440px] lg:mt-8 py-8 mx-10 border-2 border-blue-50 rounded-lg max-w-[50%]:">
            <img
                src={image}
                alt=""
                className="pt-2 w-[80%] h-[296px] object-cover max-w-[80%]"
            />
            <div className="my-8 mx-5">
                <h1 className="text-2xl font-bold mt-1 mx-4">{title}</h1>
                <p className="leading-snug font-serif text-xl mx-4 mt-4 mb-2">
                    {text}
                </p>
            </div>
            <div className="flex flex-row justify-between h-10 pb-4 w-[80%] items-center">
                <div className="text-lg font-medium">{date}</div>

                <a href={source} target="_blank" rel="noopener noreferrer">
                    <div className="border-white rounded-full border-2 py-3 px-4 flex items-center justify-center">
                        <i
                            className="fa fa-link text-lg"
                            aria-hidden="true"
                        ></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
