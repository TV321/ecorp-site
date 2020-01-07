import React from 'react';
import './SoftwareInfo.sass';

import fsociety from './fsociety2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'

const camera = <FontAwesomeIcon icon={ faCameraRetro } />
const arrows = <FontAwesomeIcon icon={ faCompressArrowsAlt } />
const video = <FontAwesomeIcon icon={ faVideo } />
const volume = <FontAwesomeIcon icon={ faVolumeUp } />
const mic = <FontAwesomeIcon icon={ faMicrophone } />
const play = <FontAwesomeIcon icon={ faPlay } />

const SoftwareInfo = () => {
    return(
        <section id="software">
            <div id="software-container">
                <img src={ fsociety } alt=""/>
                <section>
                    <h3>The greatest products ever created</h3>
                    <p>
                        Seuismod ligula ipsum vulputate tellus quisque dictum tortor
                        at purus faucibus tincidunt, pellentesque habitant morbi
                        tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </p>
                    <ul>
                        <li><span className="software-icon">{ camera }</span>Eiusmod tempor incididunt labore.</li>
                        <li><span className="software-icon">{ arrows }</span>Neque porro quisquam est.</li>
                        <li><span className="software-icon">{ video }</span>Sed quia non numquam eius.</li>
                        <li><span className="software-icon">{ volume }</span>Vel illum qui dolorem eum.</li>
                        <li><span className="software-icon">{ mic }</span>Fugiat quo voluptas nulla.</li>
                    </ul>
                    <a id="about-video" href="www.home.com"><span className="play-icon">{ play }</span>About video</a> <a id="get-app" href="www.home.com">get the app</a>
                </section>

            </div>

        </section>
    )
}

export default SoftwareInfo
