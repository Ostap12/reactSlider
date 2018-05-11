import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { Provider } from 'react-redux';
import App from './components/App';

const getInitialState = () => {
    return {
        "slider": [
            {
                "hero":"https://placeimg.com/640/480/animals",
                "text":"Animals are here.",
                "image":"https://placeimg.com/150/150/animals/sepia"
            },
            {
                "hero":"https://placeimg.com/640/480/people",
                "text":"People are here.",
                "image":"https://placeimg.com/150/150/people/sepia"
            },
            {
                "hero":"https://placeimg.com/640/480/tech",
                "text":"Tech is here.",
                "image":"https://placeimg.com/150/150/tech/sepia"
            }
        ],
        currentSlideIndex: 0,
        changeSlideIntervalId: 0
    };
};

const store = configureStore(getInitialState());

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

