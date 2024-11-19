import React from 'react';
import './index.css';
const Preloader = () => {
    return (
        <div className="bg-[#0E1016] h-[100vh] flex justify-center items-center preloader-container z-[300]">
            <div className="text-center font-bold text-white text-2xl preloader-animation">
                <span>Designer</span>
                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <span>Developer</span>
                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <span>Coder</span>
            </div>
        </div>
    );
};

export default Preloader;
