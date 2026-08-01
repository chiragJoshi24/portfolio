import { useEffect, useRef } from 'react';
import useBlobity from 'blobity/lib/react/useBlobity';

const Cursor = () => {
    const dotRef = useRef(null);

    useBlobity({
        licenseKey: 'opensource',
        zIndex: 500,
        focusableElements: 'a, button',
        color: '#0e1016',
        invert: true,
        magnetic: true,
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (dotRef.current) {
                dotRef.current.style.top = `${e.clientY}px`;
                dotRef.current.style.left = `${e.clientX}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={dotRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                backgroundColor: '#e4ded7',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 501,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
};

export default Cursor;
