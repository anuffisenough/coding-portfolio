import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import InitialsLogo from '../../assets/images/InitialsLogo2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faSuitcase, faBars, faClose, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={InitialsLogo} alt="logo"/>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="logo"/> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ' '}>
            <NavLink 
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="resume-link" 
                to="/resume">
                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="portfolio-link"
                to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className="close-icon"
                />
        </nav>
         <ul>
            <li>
                <a 
                    target="blank" 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/christopher-uffman-a62575130/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                    target="blank" 
                    rel="noreferrer" 
                    href="https://github.com/anuffisenough"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#7BBD00"
            size="3x"
            className="hamburger-icon"
            />   
    </div>
)
};

export default Sidebar