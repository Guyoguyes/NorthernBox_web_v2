import React from 'react';
import ProgramAreas from "../ProgramAreas/ProgramAreas";
import AboutComponent from "../About/AboutComponent";
import Partnerships from "../Partnerships/Partnerships";
import Hero from "../Hero/Hero";

function Home() {
    return (
        <main className="page-wrapper">

            {/*// <!-- Start Slider Area  -->*/}
            <Hero/>
            {/*// <!-- End Slider Area  -->*/}
            {/*//*/}
            {/*// <!-- Start About Area  -->*/}
        <AboutComponent/>
            {/*// <!-- Start About Area  -->*/}
            {/*//*/}
            {/*// <!-- Start Service Area  -->*/}
            <div className="rn-service-area ptb--80 bg_image bg_image--3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="section-title text-start mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                                <h2 className="title">What We Are</h2>
                                <p>NBC embraces the diversity, equality, equity, and uniqueness of members, and the
                                    communities that we serve by committing to be an anti-tribal community.</p>
                                <div className="service-btn"><a className="btn-transparent rn-btn-dark"
                                                                href="membership"><span
                                    className="text">Get Started</span></a></div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt_md--50">
                            <div className="row service-one-wrapper">

                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <a href="service-details.html">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="cast"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">We say YES to PEOPLE</h3>
                                                    <p>We recognize the unique value and creative potential in everyone. Through programs, exhibits and events we commit to honor and support this potential by inspiring the innovator in everyone.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <a href="service-details.html">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="layers"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Creativity and Innovation</h3>
                                                    <p>As a community dedicated to building more complex systems and homegrown solutions that benefit local communities. Our aim is to make sure that Creativity and Innovation spaces are brought to Northern Kenya.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <a href="service-details.html">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="users"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Collaboration and Team Work</h3>
                                                    <p>The Community fosters economic development by leading, promoting, and creating educational opportunities through mutually respectful and beneficial partnerships with community organizations.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        <a href="service-details.html">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="monitor"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Technology for Northern</h3>
                                                    <p>We celebrate the power of technology to transform lives. We commit to helping people use technology creatively and ethically through research in crucial sectors where we can leverage technology to build solutions</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- Start Service Area  -->*/}
            {/*//*/}
            <ProgramAreas/>
            {/*// <!-- Start Portfolio Area  -->*/}
            {/*//TODO: Community project commented out */}
            {/*<div className="rn-portfolio-area rn-section-gap bg_color--1">*/}
            {/*    <div className="portfolio-sacousel-inner pb--30">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-lg-12">*/}
            {/*                    <div className="section-title text-center mb--20 mb_sm--0 mb_md--0">*/}
            {/*                        <h2 className="title">Community Projects</h2>*/}
            {/*                        <p>All our projects are designed specifically to solve challenges faced by northern kenya from eduction to agriculture to bussiness</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div*/}
            {/*            className="portfolio-slick-activation rn-slick-activation item-fluid rn-slick-dot mt--40 mt_sm--40"*/}
            {/*            data-slick-options='{*/}
            {/*                                "spaceBetween": 15,*/}
            {/*                                "slidesToShow": 5,*/}
            {/*                                "slidesToScroll": 1,*/}
            {/*                                "arrows": true,*/}
            {/*                                "infinite": true,*/}
            {/*                                "dots": true*/}
            {/*                            }' data-slick-responsive='[*/}
            {/*                            {"breakpoint":1600, "settings": {"slidesToShow": 4}},*/}
            {/*                            {"breakpoint":1200, "settings": {"slidesToShow": 3}},*/}
            {/*                            {"breakpoint":890, "settings": {"slidesToShow": 3}},*/}
            {/*                            {"breakpoint":590, "settings": {"slidesToShow": 2}},*/}
            {/*                            {"breakpoint":480, "settings": {"slidesToShow": 1}}*/}
            {/*                            ]'>*/}

                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-2"></div>*/}
            {/*                    <div className="bg-blr-image image-2"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-5"></div>*/}
            {/*                    <div className="bg-blr-image image-5"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-6"></div>*/}
            {/*                    <div className="bg-blr-image image-6"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-7"></div>*/}
            {/*                    <div className="bg-blr-image image-7"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-8"></div>*/}
            {/*                    <div className="bg-blr-image image-8"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Single Portfolio  -->*/}
            {/*            <div className="portfolio">*/}
            {/*                <div className="thumbnail-inner">*/}
            {/*                    <div className="thumbnail image-9"></div>*/}
            {/*                    <div className="bg-blr-image image-9"></div>*/}
            {/*                </div>*/}
            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <p>Development</p>*/}
            {/*                        <h4><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
            {/*                        <div className="portfolio-button">*/}
            {/*                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Single Portfolio  -->*/}
            {/*        </div>*/}
                    {/*// <!-- End Portfolio Activation  -->*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*// <!-- End Portfolio Area  -->*/}
            {/*//*/}
            {/*// <!-- Start Counterup Area  -->*/}
            <div className="rn-counterup-area pt--25 pb--110 bg_color--1" style={{backgroundImage: 'url(assets/images/bg/funfact1.png)',
                                                                                    backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',backgroundColor: '#014A75',
                                                                                   }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h3 className="fontWeight500" style={{color: '#fefefe'}}>Our Fun Facts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>92</h5>
                                <p className="description" style={{color: '#fefefe'}}>Total Members.</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>33</h5>
                                <p className="description" style={{color: '#fefefe'}}>Skilled and Exprienced Members.</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Counterup  -->*/}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="rn-counterup counterup_style--1">
                                <h5 className="counter count" style={{color: '#fefefe'}}>8</h5>
                                <p className="description" style={{color: '#fefefe'}}>Nortern Counties we cover</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                    </div>
                </div>
            </div>
            {/*// <!-- End Counterup Area  -->*/}
            {/*<div className="rn-blog-area rn-section-gapTop bg_color--1 mb--40">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row align-items-end mb--20">*/}
            {/*            <div className="col-lg-6 col-md-12 col-sm-12 col-12">*/}
            {/*                <div className="section-title text-start">*/}
            {/*                    <h2>Latest News</h2>*/}
            {/*                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have*/}
            {/*                        suffered alteration.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 col-md-12 col-sm-12 col-12">*/}
            {/*                <div className="blog-btn text-start text-lg-end mt_sm--10 mt_md--10">*/}
            {/*                    <a className="btn-transparent rn-btn-dark" href="blog.html"><span className="text">View All*/}
            {/*                            News</span></a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
                        {/*// <!-- Start Blog Area  -->*/}
            {/*            <div className="col-lg-4 col-md-6 col-sm-6 col-12">*/}
            {/*                <div className="blog blog-style--1">*/}
            {/*                    <div className="thumbnail">*/}
            {/*                        <a href="blog-details.html">*/}
            {/*                            <img className="w-100" src="assets/images/blog/blog-01.jpg" alt="Blog Images"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className="content">*/}
            {/*                        <p className="blogtype">Development</p>*/}
            {/*                        <h4 className="title"><a href="blog-details.html">Getting tickets to the big*/}
            {/*                            show</a>*/}
            {/*                        </h4>*/}
            {/*                        <div className="blog-btn">*/}
            {/*                            <a className="rn-btn text-white" href="blog-details.html">Read More</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Blog Area  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Blog Area  -->*/}
            {/*            <div className="col-lg-4 col-md-6 col-sm-6 col-12">*/}
            {/*                <div className="blog blog-style--1">*/}
            {/*                    <div className="thumbnail">*/}
            {/*                        <a href="blog-details.html">*/}
            {/*                            <img className="w-100" src="assets/images/blog/blog-02.jpg" alt="Blog Images"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className="content">*/}
            {/*                        <p className="blogtype">Development</p>*/}
            {/*                        <h4 className="title"><a href="blog-details.html">Getting tickets to the big*/}
            {/*                            show</a>*/}
            {/*                        </h4>*/}
            {/*                        <div className="blog-btn">*/}
            {/*                            <a className="rn-btn text-white" href="blog-details.html">Read More</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Blog Area  -->*/}
            {/*            /!*//*!/*/}
                        {/*// <!-- Start Blog Area  -->*/}
            {/*            <div className="col-lg-4 col-md-6 col-sm-6 col-12">*/}
            {/*                <div className="blog blog-style--1">*/}
            {/*                    <div className="thumbnail">*/}
            {/*                        <a href="blog-details.html">*/}
            {/*                            <img className="w-100" src="assets/images/blog/blog-03.jpg" alt="Blog Images"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className="content">*/}
            {/*                        <p className="blogtype">Development</p>*/}
            {/*                        <h4 className="title"><a href="blog-details.html">Getting tickets to the big*/}
            {/*                            show</a>*/}
            {/*                        </h4>*/}
            {/*                        <div className="blog-btn">*/}
            {/*                            <a className="rn-btn text-white" href="blog-details.html">Read More</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
                        {/*// <!-- End Blog Area  -->*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*// <!-- End Blog Area  -->*/}
            {/*//*/}
            {/*// <!-- Start Brand Area -->*/}
            <Partnerships />
            {/*// <!-- End Brand Area -->*/}

        </main>
    );
}

export default Home;