import React from 'react';
import './Main.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const twitter = <FontAwesomeIcon icon={ faTwitter } />
const github = <FontAwesomeIcon icon={ faGithubAlt } />

const Main = () =>{
    return(
        <main>
            <div className="wrapper">
                <div className="container">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <h2>consectetur adipiscing elit</h2>
                    <a href="broken.com"><span className="icon">{ twitter }</span> voluptatum</a>
                    <a href="broken.com"><span className="icon">{ github }</span> dignissimos</a>
                </div>
            </div>
        </main>
    )
}

export default Main
