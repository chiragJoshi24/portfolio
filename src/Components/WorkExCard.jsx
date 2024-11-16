import React from 'react';
import PropTypes from 'prop-types';

const WorkExCard = ({ name, workDuration, description }) => {
    return (
        <div className=" bg-[#1a1d23] w-full sm:w-96 md:w-[500px] lg:w-[700px] xl:w-[900px] my-8 p-16 rounded-lg border-white border-2">
            <h2 className="text-3xl font-semibold text-white mb-2">{name}</h2>
            <p className="text-base text-gray-400 mb-4">{workDuration}</p>
            {description.map((item, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-2xl font-medium text-white">
                        {item.work}
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300">
                        {item.subWork.map((subItem, subIndex) => (
                            <li key={subIndex} className="text-base">
                                {subItem}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
WorkExCard.propTypes = {
    name: PropTypes.string.isRequired,
    workDuration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default WorkExCard;
