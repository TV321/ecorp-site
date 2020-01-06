import React from 'react';
import './LogoSection.sass';
import google from './google_logo.png';
import facebook from './facebook_logo.png';
import yahoo from './yahoo_logo.png';
import paypal from './paypal_logo.png';

const LogoSection = () => {
    return (
        <section>
            <img src={ google } alt=""/>
            <img src={ facebook } alt=""/>
            <img src={ yahoo } alt=""/>
            <img src={ paypal } alt=""/>
        </section>
    )
}

export default LogoSection;
