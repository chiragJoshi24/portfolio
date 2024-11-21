import React from 'react';
import PropTypes from 'prop-types';
import Glide from '../Animations/Glide';

const WorkExCard = ({ name, workDuration, description }) => {
    return (
        <div className=" bg-[#1a1d23] w-[1100px] max-w-[85%] my-8 p-16 rounded-lg border-white border-2">
            <h2 className="text-3xl font-semibold text-white mb-2">
                <Glide visible={0} transitionDistance={-150} time={0.5}>
                    {name}
                </Glide>
            </h2>
            <p className="text-base text-gray-400 mb-4">
                <Glide visible={0} transitionDistance={-150} time={0.5}>
                    {workDuration}
                </Glide>
            </p>
            {description.map((item, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-2xl font-medium text-white">
                        <Glide visible={0} transitionDistance={-150} time={0.5}>
                            {item.work}
                        </Glide>
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300">
                        {item.subWork.map((subItem, subIndex) => (
                            <li key={subIndex} className="text-lg">
                                <Glide
                                    visible={0}
                                    transitionDistance={-150}
                                    time={0.5}
                                >
                                    {subItem}
                                </Glide>
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
    description: PropTypes.array.isRequired,
};
export default WorkExCard;
