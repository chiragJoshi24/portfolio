import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay * 1000);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [delay]);

    const fadeStyles = {
        opacity: isVisible ? 1 : 0,
        width: '100%',
        height: '100%',
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        // display: 'contents'
    };

    return (
        <div ref={elementRef} style={fadeStyles}>
            {children}
        </div>
    );
};

export default FadeIn;
