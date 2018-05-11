import { createStore } from 'redux';
import slider from '../reducers/sliderReducer';

const configureStore = (initialState) => {
    return createStore(
        slider,
        initialState
    );
};

export default configureStore;