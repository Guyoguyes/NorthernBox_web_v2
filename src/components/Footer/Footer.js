import React from 'react';

function Footer() {
    return (
        <div className="footer-area footer-default">
            <div className="footer-wrapper">
                <div className="row align-items-end row--0">
                    <div className="col-lg-6">
                        <div className="footer-left">
                            <div className="inner">
                                <span>Ready To Do This</span>
                                <h2>Let's get <br/> to work</h2>
                                <a className="rn-button-style--2" href="contact">
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-right" data-black-overlay="6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="footer-widget">
                                        <h4>Quick Link</h4>
                                        <ul className="ft-link">
                                            <li><a href="">Membership</a></li>
                                            <li><a href="">Volunteer</a></li>
                                            <li><a href="">Let's Talk</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                    <div className="footer-widget">
                                        <h4>Say Hello</h4>
                                        <ul className="ft-link">
                                            <li><a href="mailto:hi@northernboxcommunity.com">hi@northernboxcommunity.com</a></li>
                                            <li><a href="mailto:contact@northernboxcommunity.com">contact@northernboxcommunity.com</a></li>
                                        </ul>

                                        <div className="social-share-inner">
                                            <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                <li><a href="https://m.facebook.com/groups/2058420990978109/?ref=group_browse"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://www.linkedin.com/company/northernbox/"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="https://twitter.com/NorthernBox_"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.instagram.com/northernboxcommunity/"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="copyright-text">
                                        <p>Copyright © 2022 <a href="home">NorthernBox Community</a>. All Rights Reserved.</p>
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

export default Footer;