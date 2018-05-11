import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sliderActions from '../actions/sliderActions';
import * as sliderConstants from '../actions/constants';
import Slider from './Slider';

class SliderPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.startAutoslide = this.startAutoslide.bind(this);
        this.stopAutoslide = this.stopAutoslide.bind(this);
        this.tick = this.tick.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }


    componentDidMount() {
        this.startAutoslide();
    }

    componentWillUnmount() {
        this.stopAutoslide();
    }

    startAutoslide() {
        const intervalId = setInterval(this.tick, sliderConstants.AUTOSLIDE_INTERVAL_MS);

        this.props.actions.saveAutoslideTimer(intervalId);
    }

    stopAutoslide() {
        const intervalId = this.props.state.changeSlideIntervalId;

        clearInterval(intervalId);
    }

    tick() {
        this.changeSlide(sliderConstants.DIRECTION_RIGHT);
    }

    changeSlide(direction) {
        const { slider, currentSlideIndex } = this.props.state;

        this.props.actions.changeSlide({
            currentSlideIndex,
            direction,
            slideCount: slider.length
        });
    }

    slideLeft() {
        this.stopAutoslide();
        this.changeSlide(sliderConstants.DIRECTION_LEFT);
        this.startAutoslide();
    }

    slideRight() {
        this.stopAutoslide();
        this.changeSlide(sliderConstants.DIRECTION_RIGHT);
        this.startAutoslide();
    }


    render() {
        const { slider, currentSlideIndex } = this.props.state;
        const currentSlide = slider[currentSlideIndex];

        return (
            <Slider
                currentSlide={currentSlide}
                leftClickHandler={this.slideLeft}
                rightClickHandler={this.slideRight}
                slideMouseEnterHandler={this.stopAutoslide}
                slideMouseLeaveHandler={this.startAutoslide} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(sliderActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);