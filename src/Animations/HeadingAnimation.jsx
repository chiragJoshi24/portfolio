import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import '../index.css';

const HeadingAnimation = ({
    children,
    time = 0.6,
    delay = 0.1,
    visible = 1,
}) => {
    const { ref, inView } = useInView({
        threshold: `${visible}`,
        triggerOnce: true,
        rootMargin: '0px 0px -50px 0px',
    });

    const splitText = (text) => {
        return text.split(' ').map((word, index) => (
            <span
                key={index}
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)',
                    display: 'inline-block',
                    transition: `opacity ${time}s ease ${index * delay}s, transform ${time}s ease ${index * delay}s`,
                    color: 'inherit',
                }}
            >
                {word}&nbsp;
            </span>
        ));
    };

    return (
        <div ref={ref} style={{ display: 'inline-block', color: 'inherit' }}>
            {splitText(children)}
        </div>
    );
};
HeadingAnimation.propTypes = {
    children: PropTypes.element,
    delay: PropTypes.number,
    time: PropTypes.number,
    visible: PropTypes.number,
};
export default HeadingAnimation;
