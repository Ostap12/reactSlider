import React from 'react';

const Slide = ({ hero, image, text, mouseEnterHandler, mouseLeaveHandler }) => {
    return (
        <div className="slide" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <img src={hero} />
            <div className="slide-overlay">
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <img src={image} />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Slide;