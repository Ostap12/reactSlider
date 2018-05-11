import React from 'react';
import * as sliderConstants from '../actions/constants';
import Slide from './Slide';
import Arrow from './Arrows';

const Slider = ({currentSlide, leftClickHandler, rightClickHandler, slideMouseEnterHandler, slideMouseLeaveHandler}) => {
    return (
        <div className="slider text-center">
            <Arrow direction={sliderConstants.DIRECTION_LEFT} clickHandler={leftClickHandler}/>
            <Slide
                hero={currentSlide.hero}
                image={currentSlide.image}
                text={currentSlide.text}
                mouseEnterHandler={slideMouseEnterHandler}
                mouseLeaveHandler={slideMouseLeaveHandler}/>
            <Arrow direction={sliderConstants.DIRECTION_RIGHT} clickHandler={rightClickHandler}/>
        </div>
    );
};


export default Slider;
