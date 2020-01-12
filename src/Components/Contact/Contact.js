import React from 'react';
import './Contact.sass';

const Contact = () => {
    return(
        <div id="contact-wrapper">
            <div id="contact">
                <h3>Contact Us</h3>
                <p>Morbi sed justo vel eros pharetra mollis in sed ligula.</p>
                <form>
                    <input type="text" placeholder="Your name..."/>
                    <input type="email" placeholder="Your email..."/>
                    <textarea rows="5" cols="20" placeholder="Your message...">
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Contact
