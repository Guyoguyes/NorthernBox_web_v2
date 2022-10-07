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
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="current-page">About</li>
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
                <div className="rn-counterup-area rn-section-gapBottom bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*// <!-- Start Single Counterup  -->*/}
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="rn-counterup counterup_style--1">
                                    <h5 className="counter count">992</h5>
                                    <p className="description">The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those.</p>
                                </div>
                            </div>
                            {/*// <!-- Start Single Counterup  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Counterup  -->*/}
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="rn-counterup counterup_style--1">
                                    <h5 className="counter count">575</h5>
                                    <p className="description">The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those.</p>
                                </div>
                            </div>
                            {/*// <!-- Start Single Counterup  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Counterup  -->*/}
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="rn-counterup counterup_style--1">
                                    <h5 className="counter count">69</h5>
                                    <p className="description">The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those.</p>
                                </div>
                            </div>
                            {/*// <!-- Start Single Counterup  -->*/}
                        </div>
                    </div>
                </div>
                {/*// <!-- End Counterup Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Finding us Area  -->*/}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Work Now</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of
                                    a page when looking at its layout. The point of using Lorem Ipsum is that.</p><a
                                className="rn-btn btn-white" href="about.html">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="assets/images/about/finding-us-01.png" alt="Finding Images"/>
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
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab7-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab8-tab">
                                        <div className="inner">
                                            <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                                                reproduced
                                                below for those interested. Sections Bonorum et Malorum original.</p>
                                        </div>
                                        <div className="author-info">
                                            <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
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
                                                    <img src="assets/images/client/testimonial-1.jpg"
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
                                                    <img src="assets/images/client/testimonial-2.jpg"
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
                                                    <img src="assets/images/client/testimonial-3.jpg"
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
                                                    <img src="assets/images/client/testimonial-4.jpg"
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
                                                    <img src="assets/images/client/testimonial-5.jpg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab6-tab" data-bs-toggle="tab" data-bs-target="#tab6" role="tab"
                                                type="button" aria-controls="tab6" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/client/testimonial-6.jpg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab7-tab" data-bs-toggle="tab" data-bs-target="#tab7" role="tab"
                                                type="button" aria-controls="tab7" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/client/testimonial-7.jpg"
                                                         alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button id="tab8-tab" data-bs-toggle="tab" data-bs-target="#tab8" role="tab"
                                                type="button" aria-controls="tab8" aria-selected="false">
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="assets/images/client/testimonial-8.jpg"
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