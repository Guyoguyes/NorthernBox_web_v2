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
                                <a className="rn-button-style--2" href="contact.html">
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
                                            <li><a href="portfolio.html">Work</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="contact.html">Let's Talk</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                    <div className="footer-widget">
                                        <h4>Say Hello</h4>
                                        <ul className="ft-link">
                                            <li><a href="mailto:admin@example.com">admin@example.com</a></li>
                                            <li><a href="mailto:hr@example.com">hr@example.com</a></li>
                                        </ul>

                                        <div className="social-share-inner">
                                            <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="copyright-text">
                                        <p>Copyright © 2022 <a href="northernboxcommunity.com">NorthernBox Community</a>. All Rights Reserved.</p>
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