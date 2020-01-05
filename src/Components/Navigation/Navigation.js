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
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div id="social-nav">
                <ul>
                    <li>{ facebook }</li>
                    <li>{ instagram }</li>
                    <li>{ youtube }</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
