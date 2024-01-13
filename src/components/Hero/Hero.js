import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1705077199/image1_0_tcmip9.jpg',
    altText: '_Connect_',
    caption: '_Connect_',
    description: 'Join our community that values continuous learning and mutual inspiration. NorthernBox is your hub for knowledge expansion and personal growth.',
    key: 1,
  },
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783274/create_me_an_im_1_pvqmnp.png',
    altText: '_Learn_',
    caption: '_Learn_',
    description: 'Embark on a journey of continuous learning. NorthernBox provides opportunities for you to expand your knowledge and skills.',
    key: 2,
  },
  {
    src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783788/I_am_from_north_0_wjmw3a.png',
    altText: 'Inspire',
    caption: 'Inspire',
    description: 'Unleash your potential. NorthernBox is here to inspire you to pursue your passions and achieve your fullest potential.',
    key: 3,
  },
  // {
  //   src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783788/I_am_from_north_0_wjmw3a.png',
  //   altText: 'Innovate',
  //   caption: 'Innovate',
  //   description: 'Fuel innovation and creativity. NorthernBox believes in the power of our community to develop groundbreaking solutions for local challenges.',
  //   key: 3,
  // },
];


function Hero(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          style={{
            background: `linear-gradient(
                              rgba(0, 0, 0, 0.5),
                              rgba(136, 98, 98, 0.5)
                              ), url(${item.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '50px',
              fontWeight: '900',
              marginTop: '60px',
              color: '#014A75'
            }}
          >
            {item.caption}
          </h1>
          <p
            style={{
              color: '#fefefe',
              fontSize: '24px',
              width: '70%',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            {item.description}
          </p>
          <div style={{ marginTop: '30px' }}>
            <a
              style={{
                backgroundColor: '#007bff',
                padding: '10px 20px',
                borderRadius: '5px',
                color: '#fff',
                textDecoration: 'none',
              }}
              href="/about"
            >
              More
            </a>
          </div>
        </div>
        <CarouselCaption captionText={item.caption}  />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} {...props}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Hero;
