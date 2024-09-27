import React, { useState } from 'react';
import img1 from './img/image.png';
import img2 from './img/img2.png';
const ManualImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        img1,img2
    ];

    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <div>
            <h1>Manual Image Slider</h1>
            <button onClick={previousImage}>Previous</button>
            <img src={images[currentImage]} style={{width:"500px",height:"500px"}} alt="Slider Image" />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default ManualImageSlider;