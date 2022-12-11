import React from 'react';
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'

function ProgramAreas(props) {
    return (
        <>
            {/*// <!-- Start Service Area  -->*/}
            <div class="rn-service-area rn-section-gap bg_color--5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb--30">
                                <h2 class="title">Our Program Areas</h2>
                                <p>The Community is currently undertaking several projects starting form STEM education to
                                startups and innovation incubation</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <GiIcons.GiTeacher/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Career in Science & Technology</h3>
                                            <p>Northernbox’s career in tech is tailored towards bringing STEM education to the classroom. It is a platform created to provide individuals with accessibility to tech education irrespective of their backgrounds.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                        {/*//*/}

                        {/*//*/}
                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <BiIcons.BiGitBranch/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Tech Diversity And Revolution</h3>
                                            <p>Un-learning biases and changing the stereotypes is essential, if we are to see boys and girls
                                                able to compete on a more equal footing for the jobs of the future. This goes hand-in-hand with
                                                practical programmes that teach immediately relevant skills.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <RiIcons.RiTeamFill/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Collaboration and Partnerships</h3>
                                            <p>NorthernBox seeks to collaborate with other communities and startups to boost
                                                skills development across industries and job market.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <MdIcons.MdOutlineBusiness/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">SMEs Empowerment</h3>
                                            <p> Through our program we give SMEs (Micro, Small, and Medium Enterprises) a technological "leg-up"
                                                to help them unlock more opportunities to boost their finance and local economies</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <FaIcons.FaBattleNet/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Peace and Unity For Northern</h3>
                                            <p>The increasingly important role of technology through social media to culture and society and its potential
                                                for use by tribal groups, this initiative aims to strengthen dialogue and support the youth to
                                                respond to possible terrorist uses of social media.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                        {/*//*/}
                        {/*// <!-- Start Single Service  -->*/}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                            <div class="single-service service__style--2 bg-color-gray">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <RiIcons.RiWomenFill/>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Girls and Women In Tech</h3>
                                            <p>NBC Women in Tech takes action to ensure women’s inclusion in tech education. While
                                                women are still under-represented in the tech industry, this initiative seeks to increase the
                                                number of women in tech. This program is dedicated to close the gender gap in the tech field.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*// <!-- End Single Service  -->*/}
                    </div>
                </div>
            </div>
            {/*// <!-- Start Service Area  -->*/}
        </>

    );
}

export default ProgramAreas;