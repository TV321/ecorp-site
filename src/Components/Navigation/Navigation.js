import React from 'react';
import './Navigation.sass';

const Navigation = () =>{
    return(
        <nav>
            <div id="logo-nav">
                <p>Evil Corp.</p>
            </div>
            <div id="main-nav">
                <ul>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </div>
            <div id="social-nav">
                <ul>
                    <li>Face</li>
                    <li>Insta</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
