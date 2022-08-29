import React, {useState} from "react"
import { Navbar, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './NavigationBar.css'
import logo from '../../assets/nbc.png'


const NavigationBar = () =>{

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return(
        <div>
          <div className="min_nav">
            <div className="min_nav_text">
                <p className="phone-text">+2547-294-323-23     contact@northernbox.org</p>
            </div>
          </div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
         <nav className="navbar" onClick={e => e.stopPropagation()}>
           <div className="nav-container">
             <NavLink exact href="/" className="nav-logo">
               <img src={logo} style={{width: "300px"}} alt="northernbox_logo"/>
             </NavLink>
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <NavLink
                   exact
                   href="/"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   href="/about"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   About Us
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   href="/participation"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Volunteer
                 </NavLink>
               </li>
               <li className="nav-item" style={{float: "right"}}>
                 <NavLink
                   exact
                   href="/engage/membership"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Become a member
                   
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   href="/engage/mentorship"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Speaker
                   
                 </NavLink>
               </li>
               
             </ul>
             <div className="nav-icon" onClick={handleClick}>
               <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
             </div>
           </div>
         </nav>
       </ div>
    )
}

export default NavigationBar