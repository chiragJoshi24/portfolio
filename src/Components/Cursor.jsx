import React, { useEffect, useState } from 'react';
import useBlobity from 'blobity/lib/react/useBlobity';

const Cursor = () => {
    const [dotStyle, setDotStyle] = useState({ top: 0, left: 0 });

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
            setDotStyle({
                top: `${e.clientY}px`,
                left: `${e.clientX}px`,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: dotStyle.top,
                left: dotStyle.left,
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
