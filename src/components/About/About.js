import React from 'react';
import AboutComponent from "./AboutComponent";
import CommunityLeadTeam from "../CommunityLeadTeam/CommunityLeadTeam";
import Partnerships from "../Partnerships/Partnerships";
import ProgramAreas from "../ProgramAreas/ProgramAreas";

function About(props) {
    var title = 'Our Skilled Team'
    return (
        <div>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(https://res.cloudinary.com/dabfdxbfj/image/upload/v1686429267/800px-Mt._Ololokwe_Samburu_awr1i1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>About Us</h2>
                                <p style={{color: '#fefefe', fontSize: '24px'}}>Driving technology to Northern Frontier</p>
                                <ul className="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li className="about">About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">

                {/*// <!-- Start About Area  -->*/}
                <AboutComponent/>
                {/*// <!-- Start About Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Counterup Area  -->*/}
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
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="cast"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">We say YES to PEOPLE</h3>
                                                    <p>We recognize the unique value and creative potential in everyone. Through programs, exhibits and events we commit to honor and support this potential by inspiring the innovator in everyone.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="layers"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Creativity and Innovation</h3>
                                                    <p>As a community dedicated to building more complex systems and homegrown solutions that benefit local communities. Our aim is to make sure that Creativity and Innovation spaces are brought to Northern Kenya.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="users"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Collaboration and Team Work</h3>
                                                    <p>The Community fosters economic development by leading, promoting, and creating educational opportunities through mutually respectful and beneficial partnerships with community organizations.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                {/*// <!-- End Single Service  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Single Service  -->*/}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-service service__style--4">
                                        
                                            <div className="service">
                                                <div className="icon">
                                                    <i data-feather="monitor"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Technology for Northern</h3>
                                                    <p>We celebrate the power of technology to transform lives. We commit to helping people use technology creatively and ethically through research in crucial sectors where we can leverage technology to build solutions</p>
                                                </div>
                                            </div>
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
            <div className="rn-counterup-area pt--25 pb--110 bg_color--1" style={{backgroundColor: '#014A75'}}>
                <div className="container">
                    <div className="row" style={{marginTop: '50px'}}>
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
                                <h5 className="counter count" style={{color: '#fefefe'}}>4</h5>
                                <p className="description" style={{color: '#fefefe'}}>Northern Counties we cover</p>
                            </div>
                        </div>
                        {/*// <!-- Start Single Counterup  -->*/}
                    </div>
                </div>
            </div>
                {/*// <!-- End Counterup Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Finding us Area  -->*/}
                <div className="rn-finding-us-area rn-finding-us bg_color--1" style={{marginTop: "70px"}}>
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your STEM community Now</h4>
                                <p>It is important to surround yourself in an environment where you can be comfortable and motivated. When it comes to design and creative thinking, innovators need to have a space that is both open and encouraging</p><a
                                className="rn-btn btn-white" href="https://docs.google.com/forms/d/e/1FAIpQLSfR4otBMjYE77DxuzG4IFTkOwkA4rRIhVnbmjoCJbdqpx0HMQ/viewform?usp=sf_link">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1686430339/IMG_8657_yolykv.jpg" alt="Finding Images"  style={{width: '65vw', height: '750px', objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- End Finding us Area  -->*/}
                {/*//*/}
                {/*// <!-- Start team Area  -->*/}
                <CommunityLeadTeam />
                {/*// <!-- Start team Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Testimonial Area  -->*/}
                <div className="rn-testimonial-area rn-section-gap bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*// <!-- Start Tab Content  -->*/}
                                <div className="rn-testimonial-content tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                         aria-labelledby="tab1-tab">
                                        <div className="inner">
                                            <p>NorthernBox targets to achieve the most through leveraging technological innovation provide solutions to the local community.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Adho Adhi Galgallo </span> - Growth and Programs</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="inner">
                                            <p>NorthernBox's provides businesses with the technology they need.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Diram Bora Guyo </span> - Programs and Partnership</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <div className="inner">
                                            <p>NorthernBox is a team that has the knowledge and unique perspective of technology needs.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Galgallo Wako </span> - Operations and Technical Lead</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="inner">
                                            <p>NorthernBox is a team that has the knowledge and unique perspective of technology needs.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Guyo Abdub </span> - Business Development and Finance</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab-tab">
                                        <div className="inner">
                                            <p>NorthernBox targets to achieve the most through leveraging technological innovation provide solutions to the local community.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Mustafa Ahmed </span> - Strategy and Marketing</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*// <!-- End Tab Content  -->*/}
                                {/*//*/}
                                {/*// <!-- Start Tab Nav  -->*/}
                                <ul className="testimonial-thumb-wrapper nav nav-tabs" id="myTab" role="tablist">
                                    <li>
                                        <button className="active" id="tab1-tab" data-bs-toggle="tab"
                                                data-bs-target="#tab1" role="tab" type="button" aria-controls="tab1"
                                                aria-selected="true">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/adho.jpg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" role="tab"
                                                type="button" aria-controls="tab2" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/diram.JPEG"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" role="tab"
                                                type="button" aria-controls="tab3" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/galgallo.png"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" role="tab"
                                                type="button" aria-controls="tab4" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/guyo.png"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" role="tab"
                                                type="button" aria-controls="tab5" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/team/mustafa.jpeg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                                {/*// <!-- End Tab Content  -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Start Testimonial Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Brand Area -->*/}
                <Partnerships />
                {/*// <!-- End Brand Area -->*/}
                {/*//*/}

            </main>
        </div>
    );
}

export default About;