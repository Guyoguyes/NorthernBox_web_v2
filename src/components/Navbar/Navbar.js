import React from 'react';

function Navbar(props) {
    return (
        <>
            <header className="header-area formobile-menu header--transparent black-logo-version ">
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/nbc.png" alt="NorthernBox Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="mainmenunav d-lg-block">
                            <nav className="main-menu-navbar">
                                <ul className="mainmenu">
                                    <li className="has-droupdown">
                                        <a href='home'>Home</a>
                                    </li>
                                    <li>
                                        <a href="about">About</a>
                                    </li>
                                    <li className="has-droupdown">
                                        <a href="team">Team</a>
                                    </li>
                                    <li className="has-droupdown">
                                        <a href="blogs">Activities</a>
                                        <ul className="submenu">
                                            <li><a href="events">Events</a></li>
                                            <li><a href="blogs">Blogs</a></li>
                                            <li><a href="project">Projects</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfR4otBMjYE77DxuzG4IFTkOwkA4rRIhVnbmjoCJbdqpx0HMQ/viewform?usp=sf_link">
                                <span>Join</span>
                            </a>
                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdicIssy67YAg0O9iMGKp29BomtClkOGgYfSD9UWokHVHudyw/viewform?usp=sf_link">
                                <span>Volunteer</span>
                            </a>
                        </div>
                        <div className="humberger-menu d-block d-lg-none pl--20">
                        <span className="menutrigger text-white">
                    <i data-feather="menu"></i>
                </span>
                        </div>
                        <div className="close-menu d-block d-lg-none">
                        <span className="closeTrigger">
                    <i data-feather="x"></i>
                </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;