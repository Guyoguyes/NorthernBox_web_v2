import React from 'react';

function Contact(props) {
    return (
        <>
            <div className="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100 bg_image bg_image--17"
                 data-black-overlay="5" style={{backgroundImage: 'url(assets/images/bg/netbhg.jpg)',
                backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Contact With Us</h2>
                                <p>We would Love to hear from You! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper" >

                {/*// <!-- Start Contact Address Area  -->*/}
                <div style={{backgroundColor: '#000'}} className="rn-contact-address-area rn-section-gap bg_color--5">
                    <div className="container">
                        <div className="row mt_dec--40">
                            {/*// <!-- Start Single Address  -->*/}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40">
                                <div className="rn-address">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:+254729753530">+254 729 753 530</a></p>
                                        <p><a href="tel:+254723212256">+254 723 212 256</a></p>
                                    </div>
                                </div>
                            </div>
                            {/*// <!-- End Single Address  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Address  -->*/}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40">
                                <div className="rn-address">
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:admin@gmail.com">info@northernbox.co.ke</a></p>
                                        <p><a href="mailto:example@gmail.com">contact@northernbox.co.ke</a></p>
                                    </div>
                                </div>
                            </div>
                            {/*// <!-- End Single Address  -->*/}
                            {/*//*/}
                            {/*// <!-- Start Single Address  -->*/}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40">
                                <div className="rn-address">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>Ihub  6th Floor Senteu Plaza<br/> Galana Road, Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>
                            {/*// <!-- End Single Address  -->*/}

                        </div>
                    </div>
                </div>
                {/*// <!-- End Contact Address Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Contact Area  -->*/}
                <div className="rn-contact-area rn-section-gap bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-start mb--50 mb_sm--30 mb_md--30">
                                        <h2 className="title">Contact Us.</h2>
                                        <p className="description">I am available for freelance work. Connect with me via
                                            phone:
                                            <a href="tel:+254729753530">+254 729 753 530</a> or email:
                                            <a href="mailto:contact@northernbox.co.k">contact@northernbox.co.k</a>
                                        </p>
                                    </div>
                                    <div className="form-wrapper">
                                        <form id="contact-form-active" action="https://rainbowit.net/html/trydo/mail.php"
                                              method="post">
                                            <input name="name" type="text" placeholder="Your Name *"/>
                                            <input name="email" type="email" placeholder="Your email *"/>
                                            <input name="subject" type="text" placeholder="Write a Subject"/>
                                            <textarea name="message" placeholder="Your Message"></textarea>
                                            <button type="submit" className="rn-button-style--2 btn_solid">
                                                <span>Send message</span>
                                            </button>
                                        </form>
                                        <div className="form-output">
                                            <p className="form-messege-active form-messege"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="thumbnail mb_md--40 mb_sm--40">
                                        <img src="assets/images/bg/contactbg.png" alt="trydo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- End Contact Area  -->*/}
                {/*//*/}
                {/*// <!-- Start Brand Area -->*/}
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.961089192306!2d37.58153398511964!3d0.3583791976641129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1788662553abb67f%3A0xc9bb1d9f0aaf7321!2sIsiolo%2C%20Kenya!5e0!3m2!1sen!2sus!4v1666382016083!5m2!1sen!2sus"
                        width="600" height="450" style={{margin: 'auto'}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                {/*// <!-- End Brand Area -->*/}
            </main>
        </>

    );
}

export default Contact;