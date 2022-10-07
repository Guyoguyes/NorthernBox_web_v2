import React from 'react';

function AboutComponent(props) {
    return (
        <div className="about-area rn-section-gap bg_color--1">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="assets/images/about/about-3.png" alt="About Images"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">About</h2>
                                    <p className="description">We are a team of tech enthusiastic individuals from Northern Kenya bringing together students,learners and experts to Train learn,mentor and collaborate on technologies and creating solutions in the region.</p>
                                </div>
                                <div className="row mt--30 mt_sm--10">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Our Mission</h3>
                                            <p>NorthernBox Community is on a mission to bring together a team of like-minded individuals
                                                to showcase Northern Kenya’s best talent ideas and businesses with a focus on leveraging
                                                technological innovations.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Our Vision</h3>
                                            <p>There are many vtions of passages of Lorem Ipsum available, but the
                                                majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;