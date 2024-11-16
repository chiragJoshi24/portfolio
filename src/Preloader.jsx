import React from 'react';
import './index.css';
const Preloader = () => {
    return (
        <div className="bg-[#0E1016] h-[100vh] flex justify-center items-center preloader-container z-[300]">
            <div className="text-center font-bold text-white text-2xl preloader-content">
                Designer &nbsp; /&nbsp; Developer &nbsp;/&nbsp; Coder
            </div>
        </div>
    );
};

export default Preloader;
