import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import Glide from '../Animations/Glide';

const WorkExCard = ({ name, workDuration, description, image }) => {
    const [viewLogo, changeView] = useState(true);

    return (
        <div
            onClick={() => changeView(!viewLogo)}
            className="w-[1100px] max-w-[85%] mx-auto my-20 flex justify-center items-center"
        >
            <AnimatePresence mode="wait">
                {viewLogo ? (
                    <motion.img
                        key="logo-view"
                        src={image}
                        alt={`${name} logo`}
                        className="h-[500px] object-contain cursor-pointer py-10"
                        title="Click Me!"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    />
                ) : (
                    <motion.div
                        key="details-view"
                        className="bg-[#1a1d23] my-8 p-16 rounded-lg border-white border-2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold text-white mb-2">
                            <Glide visible={0} transitionDistance={-150} time={1}>
                                {name}
                            </Glide>
                        </h2>
                        <p className="text-base text-gray-400 mb-4">
                            <Glide visible={0} transitionDistance={-150} time={1}>
                                {workDuration}
                            </Glide>
                        </p>
                        {description.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-2xl font-medium text-white">
                                    <Glide
                                        visible={0}
                                        transitionDistance={-150}
                                        time={1}
                                    >
                                        {item.work}
                                    </Glide>
                                </h3>
                                <ul className="list-disc pl-5 text-gray-300">
                                    {item.subWork.map((subItem, subIndex) => (
                                        <li key={subIndex} className="text-lg">
                                            <Glide
                                                visible={0}
                                                transitionDistance={-150}
                                                time={1}
                                            >
                                                {subItem}
                                            </Glide>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

WorkExCard.propTypes = {
    name: PropTypes.string.isRequired,
    workDuration: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
};

export default WorkExCard;
