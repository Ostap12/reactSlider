import * as types from '../actions/types';

const sliderReducer = (state, action) => {
    switch(action.type) {
        case types.SLIDE:
            return { ...state, currentSlideIndex: action.nextSlideIndex };
        case types.SAVE_AUTOSLIDE_TIMER:
            return { ...state, changeSlideIntervalId: action.intervalId };
        default:
            return state;
    }
};

export default sliderReducer;