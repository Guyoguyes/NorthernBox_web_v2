import React from 'react';

function Events(props) {
    return (
        <div>
            {/*// <!-- Start Breadcrump Area  -->*/}
            <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/NBCwave.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 class="title" style={{fontSize: '72px'}}>Upcoming Events</h2>
                                <ul class="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li class="current-page">Events</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- End Breadcrump Area  -->*/}
            {/*// <!-- Start Page Wrapper  -->*/}
            <main class="page-wrapper">

                {/*// <!-- Start Gallery Area  -->*/}
                <div class="rn-gallery-area rn-section-gap bg_color--1 line-separator">
                    <div class="container">
                        <div class="gallery-wrapper gallery-grid row mt_dec--60" id="animated-thumbnials">

                            <a className="item-portfolio-static gallery col-lg-6 col-md-6"
                               href="assets/images/portfolio/meet3.jpg" >
                                <div className="portfolio-static">
                                    <div className="thumbnail-inner">
                                        <div className="thumbnail">
                                            <img src="assets/images/portfolio/meet3.jpg"
                                                 alt="Portfolio Images" style={{height: '500px'}}/>
                                        </div>
                                    </div>
                                    {/*<div className="content">*/}
                                    {/*    <div className="inner">*/}
                                    {/*        <p>Web Design</p>*/}
                                    {/*        <h4>Mobile App landing Design</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </a>
                            {/*// <!-- Start Single Gallery -->*/}
                            <a class="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/big/dp-big--portfolio-01.jpg">
                                <div class="portfolio-static">
                                    <div class="thumbnail-inner">
                                        <div class="thumbnail">
                                            <img src="assets/images/portfolio/meet2.png" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                    {/*<div class="content">*/}
                                    {/*    <div class="inner">*/}
                                    {/*        <p>Web Design</p>*/}
                                    {/*        <h4>T-shirt design is the part of design</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </a>
                            {/*// <!-- End Single Gallery -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Gallery -->*/}
                            <a class="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/big/dp-big--portfolio-02.jpg">
                                <div class="portfolio-static">
                                    <div class="thumbnail-inner">
                                        <div class="thumbnail">
                                            <img src="assets/images/portfolio/meet1.png" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                    {/*<div class="content">*/}
                                    {/*    <div class="inner">*/}
                                    {/*        <p>App Development</p>*/}
                                    {/*        <h4>The service provide for designer</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </a>
                            {/*// <!-- End Single Gallery -->*/}
                            {/*//*/}






                        </div>
                    </div>
                </div>
                {/*// <!-- End Gallery Area  -->*/}
                {/*//*/}
                {/*//*/}
                {/*// <!-- Start Gallery Area  -->*/}
                {/*<div class="rn-gallery-area rn-section-gap bg_color--1">*/}
                {/*    <div class="container">*/}
                {/*        <div class="row row row--5">*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-1.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Development</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">You can see your Portfolio</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-2.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Html</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">Getting tickets to the big show</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-3.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Graphic</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">You can see your Portfolio</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-4.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Freelancer</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">You can see your Portfolio</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-5.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Freelancer</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">The Language of Developer</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Portfolio  -->*/}
                {/*            <div class="col-lg-4 col-md-6 col-12">*/}
                {/*                <div class="portfolio-style--3">*/}
                {/*                    <div class="thumbnail">*/}
                {/*                        <a href="portfolio-details.html">*/}
                {/*                            <img class="w-100" src="assets/images/portfolio/portfolio-6.jpg" alt="Portfolio Images"/>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                    <div class="content">*/}
                {/*                        <p class="portfoliotype">Freelancer</p>*/}
                {/*                        <h4 class="title"><a href="portfolio-details.html">You can see your Portfolio</a></h4>*/}
                {/*                        <div class="portfolio-btn">*/}
                {/*                            <a class="rn-btn text-white" href="portfolio-details.html">Read More</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                            {/*// <!-- End Single Portfolio  -->*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*// <!-- End Gallery Area  -->*/}


            </main>
        </div>
    );
}

export default Events;