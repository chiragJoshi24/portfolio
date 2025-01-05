import PropTypes from 'prop-types';
import HeadingAnimation from '../Animations/HeadingAnimation';

const Section = ({ title, content }) => (
    <div className="mb-8">
        <h2 className="mt-1 text-3xl font-bold">
            <HeadingAnimation>{title}</HeadingAnimation>
        </h2>
        <p className="leading-snug font-serif text-2xl mt-2">
            <HeadingAnimation delay={0.03}>{content}</HeadingAnimation>
        </p>
    </div>
);
Section.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};
export default Section;
