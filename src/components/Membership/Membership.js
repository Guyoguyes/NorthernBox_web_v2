import React from 'react'
// import Particles from 'react-particles-js'; 

const  Membership = () =>{
    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(https://res.cloudinary.com/dabfdxbfj/image/upload/v1686429267/800px-Mt._Ololokwe_Samburu_awr1i1.jpg)', backgroundPosition:  'center', backgroundSize: 'cover'}}>
            {/* <Particles 
                    params={{ 
                    particles: { 
                        number: { 
                        value: 200, 
                        density: { 
                            enable: true, 
                            value_area: 1000, 
                        } 
                        }, 
                    }, 
                    }} 
                />  */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>Get Involved</h2>
                                {/* <ul className="page-list">
                                    <li><a href="home">Home</a></li>
                                    <li className="current-page">ge</li>
                                </ul> */}
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
                                            <h4 className="title" >Join Community</h4>
                                            <div className="pricing">
                                                <img style={{ margin: '0 auto', height: '200px'}} src="assets/images/service/community.png" alt="Community Image" />
                                                <span className="subtitle">At NorthernBox, we believe in the power of collective knowledge, and we invite you to join us on this exciting journey. Connect with individuals who share your mindset, expand your horizons, and contribute to a community that values shared learning and collective progress.</span>
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="reg_membership">Became A NorthernBox Member</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Join Discord</h4>
                                            <div className="pricing" >
                                                <img style={{ margin: '0 auto', height: '200px'}} src="assets/images/service/discord.png" alt="discord image" className='price' />
                                                <span className="subtitle">Join our vibrant Discord Community server to immerse yourself in dynamic interactions, seek assistance, and broaden your network. Whether you're here to learn, collaborate, or simply connect, our Discord server is the hub where the NorthernBox community comes alive. Elevate your experience, foster connections, and be part of a community that values knowledge, innovation, and collaboration</span>
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="https://discord.gg/V6njEqCTuj">Connect To Discord</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">NorthernBox Ambassador</h4>
                                            <div className="pricing">
                                                <img style={{ margin: '0 auto', height: '200px'}} src="assets/images/service/wave.png" alt="wave image" />
                                                <span className="subtitle">Become a cornerstone of NorthernBox's community-driven initiatives by joining our passionate team of ambassadors. These dedicated individuals are committed to nurturing a culture of learning, innovation, and collaboration in their respective regions</span>
                                            </div>
                                        </div>
                                        <div className="pricing-footer"><a className="rn-btn" href="reg_Ambassador">Become A NorthernBox Ambassador</a></div>
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