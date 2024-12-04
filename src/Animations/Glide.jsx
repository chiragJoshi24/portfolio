import React from 'react';
import { useInView } from 'react-intersection-observer';

const Glide = ({
    children,
    delay = 0,
    visible = 1,
    time = 1,
    transitionDistance = 150,
    rootMarg = 0,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: visible,
        rootMargin: `0px 0px ${rootMarg}px 0px`,
    });

    const animation = {
        opacity: inView ? 1 : 0,
        visibility: inView ? 'visible' : 'hidden',
        transform: inView
            ? 'translateX(0)'
            : `translateX(${transitionDistance}px)`,
        transition: `opacity ${time}s ease-out ${delay}s, transform ${time}s ease-out ${delay}s`,
    };

    return (
        <div ref={ref} style={animation}>
            {children}
        </div>
    );
};

export default Glide;
