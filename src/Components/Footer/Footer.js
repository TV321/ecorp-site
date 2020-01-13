import React from 'react';
import './Footer.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
const arrow = <FontAwesomeIcon icon={ faArrowAltCircleUp } />

const Footer = () => {
    return(
        <footer>
            <div id="footer-container">
                <p>Copyright © 2020 E-Corp</p>
                <a href="#logo-nav">{ arrow }</a>
            </div>
        </footer>
    )
}

export default Footer
