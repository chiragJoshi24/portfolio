import { useState, useEffect, lazy, Suspense } from 'react';
const MainContent = lazy(() => import('./MainContent'));
import Preloader from './Preloader';
import Cursor from './Components/Cursor';

const isMobileDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const App = () => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    useEffect(() => {
        document.body.classList.add('no-scroll', 'no-clicks');
        const timer = setTimeout(() => {
            setIsPreloaderDone(true);
            document.body.classList.remove('no-scroll', 'no-clicks');
        }, 3600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            {!isMobileDevice && <Cursor />}
            {!isPreloaderDone ? (
                <Preloader />
            ) : (
                <Suspense fallback={null}>
                    <MainContent />
                </Suspense>
            )}
        </div>
        // <>
        //     <MainContent />
        //     <Cursor></Cursor>
        // </>
    );
};

export default App;
