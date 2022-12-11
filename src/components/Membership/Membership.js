import React from 'react'

const  Membership = () =>{
    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title">Become A Member</h2>
                                <ul className="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li className="current-page">Membership</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">
                {/*// <!-- Start Pricing Plan Area  -->*/}
                <div className="rn-pricing-plan-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row mt_dec--30">
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Join Community</h4>
                                            <div className="pricing">
                                                <img src="assets/images/service/community.png" alt="Team Images" />
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfR4otBMjYE77DxuzG4IFTkOwkA4rRIhVnbmjoCJbdqpx0HMQ/viewform?usp=sf_link">Purchase
                                            Now</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Join Discord</h4>
                                            <div className="pricing">
                                                <img style={{outline: '1px solid #000'}} src="assets/images/service/discord.png" alt="Team Images" className='price' />
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="#pricing">Purchase
                                            Now</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Join WAVE</h4>
                                            <div className="pricing">
                                                <img src="assets/images/service/wave.png" alt="Team Images" />
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="#pricing">Purchase
                                            Now</a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*// <!-- End Pricing Plan Area  -->*/}
            </main>
        </>
    )
}

export default Membership