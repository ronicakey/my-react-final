import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
      <Carousel >
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h01.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h02.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Только у нас</h3>
            <p>Новые приключения любимых героев!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h04.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h05.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h06.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img width={'100%'} height={800}
            className="d-block"
            src="./img/h07.jpg"
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;