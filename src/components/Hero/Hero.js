import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';

  

  const items = [
    {
      src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686428211/IMG_8631_ndwkt2.jpg',
      altText: 'Learn',
      caption: '_Learn_',
      description: 'We believe that learning is a lifelong process and we strive to provide opportunities for people to expand their knowledge and skills.',
      key: 1,
    },
    {
      src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686422634/IMG_8538_zso9kt.jpg',
      altText: 'inspire',
      caption: '_Inspire_',
      description: 'We aim to inspire individuals in our community to pursue their passions and reach their full potential.',
      key: 2,
    },
    {
      src: 'https://res.cloudinary.com/dabfdxbfj/image/upload/v1686427482/IMG_8713_o8on6o.jpg',
      altText: 'innovate',
      caption: '_Innovate_',
      description: 'We encourage innovation and creativity, and believe that our community has the potential to develop new solutions to address local challenges.',
      key: 3,
    },
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
        
        {/* <img style={{width: '100%'}} src={item.src} alt={item.altText} /> */}
        <div class="inner text-center" style={{ background: `linear-gradient(
                                                          rgba(0, 0, 0, 0.5),
                                                          rgba(136, 98, 98, 0.5)
                                                          ), url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
                                    {/* <img style={{width: '100%'}} src={item.src} alt={item.altText} /> */}
                                    <h1 class="title theme-gradient" style={{fontFamily: 'Montserrat, sans-serif', fontSize:'100px', fontwe
                                : '900', marginTop: '200px'}}>{item.caption}</h1>
                                    <p class="description" style={{color: '#fefefe', fontSize: '24px', width: '700px', textAlign: 'center', margin: '0 auto'}}>{item.description}</p>
                                    <div class="slide-btn" style={{marginTop: '90px'}}>
                                        <a class="rn-button-style--2 btn-primary-color" href="/about">More</a>
                                    </div>
                                </div>
                                
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        >

        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...props}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {/* {slides} */}
      
        {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
    // return (
    //     <>

    //     </>
    //     // <div class="rn-slider-area slider-activation rn-slick-activation rn-slick-dot dot-light mb--0" data-slick-options='{
    //     //     "slidesToShow": 1, 
    //     //     "slidesToScroll": 1, 
    //     //     "arrows": true, 
    //     //     "fade": true,
    //     //     "infinite": true,
    //     //     "easing": "fade",
    //     //     "infinite": true,
    //     //     "adaptiveHeight": true,
    //     //     "dots": true 
    //     // }'>
    //     //     <div class="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--15" data-black-overlay="8">
    //     //         <div class="container">
    //     //             <div class="row">
    //     //                 <div class="col-lg-12">
    //     //                     <div class="inner text-center">
    //     //                         <h1 class="title theme-gradient">Marketing</h1>
    //     //                         <p class="description">There are many variations of passages of Lorem Ipsum
    //     //                             available but the majority have suffered alteration.</p>
    //     //                         <div class="slide-btn">
    //     //                             <a class="rn-button-style--2 btn-primary-color" href="contact.html">Contact Us</a>
    //     //                         </div>
    //     //                     </div>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //     </div>
    //     //     <div class="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12" data-black-overlay="8">
    //     //         <div class="container">
    //     //             <div class="row">
    //     //                 <div class="col-lg-12">
    //     //                     <div class="inner text-center">
    //     //                         <h1 class="title theme-gradient">Development.</h1>
    //     //                         <p class="description">There are many variations of passages of Lorem Ipsum
    //     //                             available but the majority have suffered alteration.</p>
    //     //                         <div class="slide-btn">
    //     //                             <a class="rn-button-style--2 btn-primary-color" href="contact.html">Contact Us</a>
    //     //                         </div>
    //     //                     </div>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //     </div>
    //     //     <div class="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12" data-black-overlay="8">
    //     //         <div class="container">
    //     //             <div class="row">
    //     //                 <div class="col-lg-12">
    //     //                     <div class="inner text-center">
    //     //                         <h1 class="title theme-gradient">UX Research.</h1>
    //     //                         <p class="description">There are many variations of passages of Lorem Ipsum
    //     //                             available but the majority have suffered alteration.</p>
    //     //                         <div class="slide-btn">
    //     //                             <a class="rn-button-style--2 btn-primary-color" href="contact.html">Contact Us</a>
    //     //                         </div>
    //     //                     </div>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //     </div>

    //     // </div>
    // );
}

export default Hero;