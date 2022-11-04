import React from 'react';
import AboutComponent from "./AboutComponent";
import CommunityLeadTeam from "../CommunityLeadTeam/CommunityLeadTeam";
import Partnerships from "../Partnerships/Partnerships";

function About(props) {
    return (
        <div>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title">About</h2>
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
                <funfact />
                {/*// <!-- End Counterup Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Finding us Area  -->*/}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
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
                                <img src="assets/images/about/innovation.png" alt="Finding Images"/>
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
                                                    <img src="assets/images/team/diram.png"
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
                                                    <img src="assets/images/team/mustafa.png"
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