import React, {useState, useRef} from "react";
import './wave.css'

function NBCWave(){


    // The state for our timer
    // const [timer, setTimer] = useState('00:00:00');
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    //
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    //
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = "2023",
        dayMonth = "01/21/",
        launchDate = dayMonth + yyyy;
    //
    today = mm + "/" + dd + "/" + yyyy;
    if (today > launchDate) {
        launchDate = dayMonth + nextYear;
    }
    const countDown = new Date(launchDate).getTime(),
        x = setInterval(function() {

        const now = new Date().getTime(),
            distance = countDown - now;


        setDays(Math.floor(distance / (day)))
        setHours(Math.floor((distance % (day)) / (hour)))
        setMinutes(Math.floor((distance % (hour)) / (minute)))
        setSeconds(Math.floor((distance % (minute)) / second))

    })




    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/wave.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'#212121'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>NorthernBox WAVE</h2>
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="current-page">Wave</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">
                <div className="container1">
                    <h1 id="headline">Countdown to NBC WAVE Launch</h1>
                    <div id="countdown">
                        <ul>
                            <li className='timerlist'><span id="days">{days}</span>days</li>
                            <span>:</span>
                            <li className='timerlist'><span id="hours">{hours}</span>Hours</li>
                            <span>:</span>
                            <li className='timerlist'><span id="minutes">{minutes}</span>Minutes</li>
                            <span>:</span>
                            <li className='timerlist'><span id="seconds">{seconds}</span>Seconds</li>
                        </ul>
                    </div>
                    <div className="about-area rn-section-gap bg_color--1">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row row--35 align-items-center">
                    <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h2 className="title">THE WAVE</h2>
                                    <p className="description" style={{textAlign: 'left'}}>We are a team of tech enthusiastic individuals from Northern Kenya bringing together students,learners and experts to Train learn,mentor and collaborate on technologies and creating solutions in the region.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="assets/images/about/about-3.png" alt="About Images"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
            <div class="rn-service-area ptb--30 bg_color--1">
                <div class="container">
                    <div class="row mt_dec--30">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 mt_sm--5 mt_md--5">
                            <div class="single-service service__style--4 large-size text-center">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <i data-feather="cast"></i>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Business Stratagy</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to
                                                the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 mt_sm--5 mt_md--5">
                            <div class="single-service service__style--4 large-size text-center">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <i data-feather="layers"></i>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Website Development</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to
                                                the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 mt_sm--5 mt_md--5">
                            <div class="single-service service__style--4 large-size text-center">
                                <a href="service-details.html">
                                    <div class="service">
                                        <div class="icon">
                                            <i data-feather="users"></i>
                                        </div>
                                        <div class="content">
                                            <h3 class="title">Marketing & Reporting</h3>
                                            <p>I throw myself down among the tall grass by the stream as I lie close to
                                                the earth.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <!-- End Single Service  --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Start Service Area  -->

            <!-- Start Featured Area  --> */}
            <div class="rn-featured-service-area pt--90 pb--120 bg_color--5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12 mt--30">
                            <div class="section-title text-start">
                                <h2 class="title">Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                                <div class="service-btn"><a class="btn-transparent rn-btn-dark" href="service.html"><span class="text">Request Custom Service</span></a></div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 mt--30">
                                    <div class="standard-service">
                                        <div class="thumbnai"><img src="assets/images/featured/corporate-01.jpg" alt="Corporate Images"/></div>
                                        <div class="content">
                                            <h3><a href="service-details.html">Thinking Development</a></h3>
                                            <p>I throw myself down among the tall grass by the stream</p><a class="btn-transparent rn-btn-dark" href="service-details.html"><span
                                                    class="text">Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 mt--30">
                                    <div class="standard-service">
                                        <div class="thumbnai"><img src="assets/images/featured/corporate-02.jpg" alt="Corporate Images"/></div>
                                        <div class="content">
                                            <h3><a href="service-details.html">Business Consulting</a></h3>
                                            <p>I throw myself down among the tall grass by the stream</p><a class="btn-transparent rn-btn-dark" href="service-details.html"><span
                                                    class="text">Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 mt--30">
                                    <div class="standard-service">
                                        <div class="thumbnai"><img src="assets/images/featured/corporate-03.jpg" alt="Corporate Images"/></div>
                                        <div class="content">
                                            <h3><a href="service-details.html">Biseness Development</a></h3>
                                            <p>I throw myself down among the tall grass by the stream</p><a class="btn-transparent rn-btn-dark" href="service-details.html"><span
                                                    class="text">Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                </div>

            </main>

        </>
    )
}

export default NBCWave