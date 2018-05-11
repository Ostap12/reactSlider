import React from 'react';

const Arrows = ({ clickHandler, direction }) => {
    return (
        <div className="slider-arrow slide-left" onClick={clickHandler}>
            {direction === 'LEFT' ? '<' : '>'}
        </div>
    );
};

export default Arrows;