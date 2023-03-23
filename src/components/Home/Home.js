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