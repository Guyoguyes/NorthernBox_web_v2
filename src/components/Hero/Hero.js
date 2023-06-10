import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';

function Hero(props) {
  const sliderRef = useRef(null);

  // useEffect(() =>{
  //     const timer = setInterval(() =>{
      
  //     if(sliderRef.current) {
  //       sliderRef.current.slickNext();
  //     }
  //   }, 3000);
  // })

  useEffect(() =>{
    const timer =setInterval(() =>{
      if(sliderRef.current){
        sliderRef.current.slickNext();
      }
    }, 3000)
  })

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    easing: "fade",
    adaptiveHeight: true,
    dots: true,
  };

  const items = [
    {
      title: 'Learn'
    },
    {
      title: 'Inspire'
    },
    {
      title: 'Innovate'
    }
  ]

  
    return (
<>
<Slider {...settings} ref={sliderRef}>
      {/* Slide 1 */}
      <div
        className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--15"
        data-black-overlay="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title theme-gradient">Marketing</h1>
                <p className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="slide-btn">
                  <a
                    className="rn-button-style--2 btn-primary-color"
                    href="contact.html"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12"
        data-black-overlay="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title theme-gradient">Development</h1>
                <p className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="slide-btn">
                  <a
                    className="rn-button-style--2 btn-primary-color"
                    href="contact.html"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12"
        data-black-overlay="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title theme-gradient">UX Research</h1>
                <p className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="slide-btn">
                  <a
                    className="rn-button-style--2 btn-primary-color"
                    href="contact.html"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
</>

    );
}

export default Hero;