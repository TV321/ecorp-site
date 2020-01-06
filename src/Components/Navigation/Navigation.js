import React from 'react';
import './Navigation.sass';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

const facebook = <FontAwesomeIcon icon={ faFacebookSquare } />
const instagram = <FontAwesomeIcon icon={ faInstagram } />
const youtube = <FontAwesomeIcon icon={ faYoutube } />

const Navigation = () =>{
    return(
        <nav className="container">
            <div id="logo-nav">
                <p>Evil Corp.</p>
            </div>
            <div id="main-nav">
                <ul id="main-list">
                    <li><a href="www.home.com">Home</a></li>
                    <li><a href="www.home.com">About</a></li>
                    <li><a href="www.home.com">Contact</a></li>
                </ul>
            </div>
            <div id="social-nav">
                <ul>
                    <li><a href="www.facebook.com">{ facebook }</a></li>
                    <li><a href="www.instagram.com">{ instagram }</a></li>
                    <li><a href="www.youtube.com">{ youtube }</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
