import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Preloader from './Preloader';
import Cursor from './Components/Cursor';

const App = () => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    useEffect(() => {
        document.body.classList.add('no-scroll', 'no-clicks');
        const timer = setTimeout(() => {
            setIsPreloaderDone(true);
            document.body.classList.remove('no-scroll', 'no-clicks');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            <Cursor />
            {!isPreloaderDone ? <Preloader /> : <MainContent />}
        </div>
        // <>
        //     <MainContent />
        //     <Cursor></Cursor>
        // </>
    );
};

export default App;
