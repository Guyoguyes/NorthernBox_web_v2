import React from 'react';

function Hero(props) {
    return (

        <div className="rn-slider-area slider-activation rn-slick-activation rn-slick-dot dot-light mb--0"
             data-slick-options='{
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows": true,
                "fade": true,
                "infinite": true,
                "easing": "fade",
                "infinite": true,
                "adaptiveHeight": true,
                "dots": true
            }'>
            {/*// <!-- Start Single Slide  -->*/}
            <div
                className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--15"
                data-black-overlay="8" >
                <div className="container">
                    {/*style={{width:'100vw', marginLeft: '-600px'}}*/}
                    <div className="row" >
                        <div className="col-lg-12">
                            <div className="inner text-center" >
                                <h1 className="title theme-gradient" >Learn . Inspire . Innovate</h1>
                                {/*<p className="description">There are many variations of passages of Lorem Ipsum*/}
                                {/*    available but the majority have suffered alteration.</p>*/}
                                <div className="slide-btn">
                                    <a className="rn-button-style--2 btn-primary-color" >Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- End Single Slide  -->*/}
            {/*//*/}
            {/*// <!-- Start Single Slide  -->*/}
            <div
                className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12"
                data-black-overlay="8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h1 className="title theme-gradient">Inspire.</h1>
                                <p className="description">There are many variations of passages of Lorem Ipsum
                                    available but the majority have suffered alteration.</p>
                                <div className="slide-btn">
                                    <a className="rn-button-style--2 btn-primary-color" href="contact.html">Contact
                                        Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- End Single Slide  -->*/}
            {/*//*/}
            {/*// <!-- Start Single Slide  -->*/}
            <div
                className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--12"
                data-black-overlay="8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h1 className="title theme-gradient">Innovate.</h1>
                                <p className="description">There are many variations of passages of Lorem Ipsum
                                    available but the majority have suffered alteration.</p>
                                <div className="slide-btn">
                                    <a className="rn-button-style--2 btn-primary-color" href="contact.html">Contact
                                        Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- End Single Slide  -->*/}

        </div>
    );
}

export default Hero;