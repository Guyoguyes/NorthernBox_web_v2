import React from 'react';

function AboutComponent(props) {
    return (
        <div className="about-area rn-section-gap bg_color--1">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="assets/images/about/about-3.jpeg" alt="About Images"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">About</h2>
                                    <p className="description">We are an organization of highly motivated and passionate individuals from Northern Kenya who are committed to fostering a culture of learning and innovation in our community. We recognize the importance of technology in driving progress and development, and we believe that by bringing together students, learners, and experts, we can create a dynamic and supportive ecosystem that empowers individuals to develop their skills and pursue their goals.</p>
                                </div>
                                <div className="row mt--30 mt_sm--10">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Our Mission</h3>
                                            <p>Our mission is to provide training, mentorship, and collaboration opportunities to individuals in the region who are interested in learning about new technologies and creating innovative solutions. We are dedicated to supporting our members throughout their learning journey, whether they are just starting out or have already gained expertise in a particular area.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="about-us-list">
                                            <h3 className="title">Our Approach</h3>
                                            <p>At the core of our organization is a commitment to collaboration and teamwork. We believe that by working together and sharing our knowledge and expertise, we can achieve more than we ever could as individuals. Through our collaborative efforts, we hope to develop a vibrant and thriving technology community in Northern Kenya that can drive progress and change in the region.</p>
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