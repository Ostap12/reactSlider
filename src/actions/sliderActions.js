import * as types from './types';
import * as sliderConstants from './constants';

const changeSlide = ({ currentSlideIndex, direction, slideCount }) => {
    let nextSlideIndex = -1;

    if (direction === sliderConstants.DIRECTION_LEFT) {
        nextSlideIndex = (currentSlideIndex > 0 ? currentSlideIndex - 1 : slideCount - 1);
    } else {
        nextSlideIndex = (currentSlideIndex < slideCount - 1 ? currentSlideIndex + 1 : 0);
    }

    return { type: types.SLIDE, nextSlideIndex };
};

const saveAutoslideTimer = (intervalId) => {
    return { type: types.SAVE_AUTOSLIDE_TIMER, intervalId };
};

export { changeSlide, saveAutoslideTimer };