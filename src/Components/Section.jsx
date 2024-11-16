import React from 'react';

const Section = ({ title, content }) => (
    <div className="mb-8">
        <h2 className="mt-1 text-3xl font-bold">{title}</h2>
        <p className="leading-snug font-serif text-2xl mt-2">{content}</p>
    </div>
);

export default Section;
