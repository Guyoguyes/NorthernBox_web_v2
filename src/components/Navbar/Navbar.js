import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubmenu = (e) => {
    e.preventDefault();
    const parentLi = e.currentTarget.parentElement;
    parentLi.classList.toggle('open');
    const submenu = parentLi.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('active');
    }
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <header className={`header-area formobile-menu header--transparent ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo w-72">
            <a href="index.html">
              <img
                src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1685890010/NorthernBox_Logo-1-removebg-preview_e4d9et.png"
                alt="NorthernBox Logo"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
        <div className="header-right flex items-center">
          <div className="mainmenunav d-lg-block mx-auto">
            <nav className={`main-menu-navbar ${menuOpen ? 'show' : ''}`}>
              <ul className="mainmenu text-xl">
                <li className="has-droupdown">
                  <a href="home" onClick={handleNavLinkClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" onClick={handleNavLinkClick}>
                    Community
                  </a>
                </li>
                <li className="has-droupdown">
                  <a onClick={toggleSubmenu}>Activities</a>
                  <ul className="submenu">
                    <li>
                      <a href="datacamp_donates" onClick={handleNavLinkClick}>
                        Datacamp Donate
                      </a>
                    </li>
                    <li>
                      <a href="events" onClick={handleNavLinkClick}>
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="blogs" onClick={handleNavLinkClick}>
                        Blogs
                      </a>
                    </li>
                    {/* <li>
                      <a href="news" onClick={handleNavLinkClick}>
                        News
                      </a>
                    </li> */}
                  </ul>
                </li>
                {/* <li>
                  <a href="contact" onClick={handleNavLinkClick}>
                    Hire Talent
                  </a>
                </li> */}
                <li>
                  <a href="contact" onClick={handleNavLinkClick}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn ml-auto">
            <a className="rn-btn" href="membership">
              <span>Get Started</span>
            </a>
          </div>
          <div className="humberger-menu d-block d-lg-none pl-4" onClick={toggleMenu}>
            <span className="menutrigger text-white text-2xl">
              <AiIcons.AiOutlineMenu />
            </span>
          </div>
          <div className="close-menu d-block d-lg-none pl-4" onClick={closeMenu}>
            <span className="closeTrigger text-2xl">
              <AiIcons.AiOutlineClose />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
