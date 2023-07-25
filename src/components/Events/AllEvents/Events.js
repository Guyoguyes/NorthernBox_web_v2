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
                               href="assets/images/portfolio/Fqr4kFnWYAEFeLv.jpeg" >
                                <div className="portfolio-static">
                                    <div className="thumbnail-inner">
                                        <div className="thumbnail">
                                            <img src="assets/images/portfolio/Fqr4kFnWYAEFeLv.jpeg"
                                                 alt="Portfolio Images" style={{height: '500px', aspectRatio: '16/9', objectFit: 'fill'}}/>
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

                        <a className="item-portfolio-static gallery col-lg-6 col-md-6"
                               href="assets/images/portfolio/FqR1eGhWwAEvUWR.jpeg" >
                                <div className="portfolio-static">
                                    <div className="thumbnail-inner">
                                        <div className="thumbnail">
                                            <img src="assets/images/portfolio/FqR1eGhWwAEvUWR.jpeg"
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

                        <a className="item-portfolio-static gallery col-lg-6 col-md-6"
                               href="assets/images/portfolio/Fifj16yXwAQSWzG.jpeg" >
                                <div className="portfolio-static">
                                    <div className="thumbnail-inner">
                                        <div className="thumbnail">
                                            <img src="assets/images/portfolio/Fifj16yXwAQSWzG.jpeg"
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
            </main>
        </div>
    );
}

export default Events;