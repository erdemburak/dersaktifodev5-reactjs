import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1" style={{ backgroundColor: 'black', height: '100px', color: 'white' }}>1</div>,
    <div className="item" data-value="2" style={{ backgroundColor: 'green', height: '100px', color: 'white' }}>2</div>,
    <div className="item" data-value="3" style={{ backgroundColor: 'red', height: '100px', color: 'white' }}>3</div>,
    <div className="item" data-value="4" style={{ backgroundColor: 'gray', height: '100px', color: 'white' }}>4</div>,
    <div className="item" data-value="5" style={{ backgroundColor: 'yellow', height: '100px', color: 'white' }}>5</div>,
];

const Carousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default Carousel