import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const GlideY = ({
    children,
    delay = 0,
    transitionDistance = 30,
    time = 0.5,
}) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const animation = {
        opacity: inView ? 1 : 0,
        visibility: inView ? 'visible' : 'hidden',
        transform: inView
            ? 'translateY(0)'
            : `translateY(${transitionDistance}px)`,
        transition: `opacity ${time}s ease-out ${delay}s, transform ${time}s ease-out ${delay}s`,
    };

    return (
        <div ref={ref} style={animation}>
            {children}
        </div>
    );
};
GlideY.propTypes = {
    children: PropTypes.element,
    delay: PropTypes.number,
    transitionDistance: PropTypes.number,
    time: PropTypes.number,
};
export default GlideY;
