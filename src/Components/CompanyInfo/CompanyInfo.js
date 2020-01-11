import React from 'react';
import './CompanyInfo.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBahai } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={ faBahai } />
const blog = <FontAwesomeIcon icon={ faBlog } />
const bug = <FontAwesomeIcon icon={ faBug } />
const arch = <FontAwesomeIcon icon={ faArchive } />
const bell = <FontAwesomeIcon icon={ faBell } />
const cart = <FontAwesomeIcon icon={ faCartPlus} />

const CompanyInformation = [
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: star
    },
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: blog
    },
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: bug
    },
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: arch
    },
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: bell
    },
    {
        title: "molestias excepturi sint",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam et quasi architecto beatae.",
        icon: cart
    },
]

const CompanyInfo = () => {
    const info = CompanyInformation.map((info, index) => {
        return (
            <section key={ index } id="company-section">
                <i>{ info.icon }</i>
                <h3>{ info.title }</h3>
                <p>{ info.about }</p>
            </section>
        )
    })
    return (
        <div id="company-wrapper">
            <div id="company-info">
                { info }
            </div>
        </div>

    )
}

export default CompanyInfo
