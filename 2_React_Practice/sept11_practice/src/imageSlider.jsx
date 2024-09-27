import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/image.png';
import img2 from './img/img2.png';
const ImageSlider = () => {
    return (
        <>
        <h1>Bootstrap Carousel</h1>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </>
    );
};

export default ImageSlider;