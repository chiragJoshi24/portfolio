import React from 'react';
import WorkExCard from './Components/WorkExCard';
import data from './workExperience.json';

const WorkExperience = () => {
    return (
        <div
            className="bg-[#0E1016] flex flex-col justify-center items-center pb-32"
            id="work"
        >
            <h1 className="font-black text-[4rem] max-w-7xl text-left leading-tight py-14">
                WORK EXPERIENCE
            </h1>
            {data.map((item, index) => (
                <WorkExCard
                    key={index}
                    name={item.name}
                    workDuration={item.workDuration}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default WorkExperience;
