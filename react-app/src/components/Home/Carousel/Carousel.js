import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
import img from './autoservis.jpeg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;