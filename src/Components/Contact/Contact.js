import React from 'react';
import './Contact.sass';

const Contact = () => {
    return(
        <div id="contact-wrapper">
            <div id="contact">
                <div id="contact-header">
                    <h3>Contact Us</h3>
                    <p>Morbi sed justo vel eros pharetra mollis in sed ligula.</p>
                </div>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea rows="5" cols="20" placeholder="Message">
                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>

    )
}

export default Contact
