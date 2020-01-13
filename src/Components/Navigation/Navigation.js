import React from 'react';
import './Navigation.sass';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const facebook = <FontAwesomeIcon icon={ faFacebookSquare } />
const instagram = <FontAwesomeIcon icon={ faInstagram } />
const twitter = <FontAwesomeIcon icon={ faTwitterSquare } />

const Navigation = () =>{
    return(
        <nav className="container">
            <div id="logo-nav">
                <p>Evil Corp.</p>
            </div>
            <div id="main-nav">
                <ul id="main-list">
                    <li className="border-bottom"><a href="#software">About</a></li>
                    <li className="border-bottom"><a href="#testimonials-wrapper">Testimonials</a></li>
                    <li className="border-bottom"><a href="#contact-wrapper">Contact</a></li>
                </ul>
            </div>
            <div id="social-nav">
                <ul>
                    <li><a href={ "https://www.facebook.com/" } target="_blank" rel="noopener noreferrer">{ facebook }</a></li>
                    <li><a href={ "https://www.instagram.com" } target="_blank" rel="noopener noreferrer">{ instagram }</a></li>
                    <li><a href={ "https://www.twitter.com" } target="_blank" rel="noopener noreferrer">{ twitter }</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
