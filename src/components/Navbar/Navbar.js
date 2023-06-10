import React from 'react';

function Navbar(props) {
    return (
        <>
            <header className="header-area formobile-menu header--transparent black-logo-version ">
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo" style={{outline: '1px solid red', width: '300px', height: '100px'}}>
                            <a href="index.html">
                                <img src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1685890010/NorthernBox_Logo-1-removebg-preview_e4d9et.png" alt="NorthernBox Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="mainmenunav d-lg-block">
                            <nav className="main-menu-navbar">
                                <ul className="mainmenu">
                                    <li className="has-droupdown" style={{fontSize: '26px'}}>
                                        <a href='home'>Home</a>
                                    </li>
                                    <li>
                                        <a href="about">About</a>
                                    </li>
                                    {/* <li className="has-droupdown">
                                        <a href="team">Team</a>
                                    </li> */}
                                    <li className="has-droupdown">
                                        <a> Activities</a>
                                        <ul className="submenu" style={{width: '50px'}}>
                                            <li><a href="events">Events</a></li>
                                            <li><a href="nbcwave">NBC Wave</a></li>
                                            {/*<li><a href="blogs">Blogs</a></li>*/}
                                            {/*<li><a href="project">Projects</a></li>*/}
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href="membership">
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