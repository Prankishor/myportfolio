import React from "react";
import './footer.css';
import ContactUs from "../contactus/ContactUs";

const Footer = () => {
    return (
        <div className="developer">
            <div className="portfolio__footer section__padding" id="contact">
                <h1 className="gradient__text">Contact</h1>
                <div className="portfolio__footer-container">
                    <div className="portfolio__footer-form_container">
                        <ContactUs />
                    </div>
                    <div className="footer-line">
                        <p className="gradient__text">"A simple hello can lead to a million things!"</p>
                    </div>
                </div>
            </div>
            <div className="deve">
                <p>Developed by Prankishore Talukdar</p>
                <p> v1.0</p>
            </div>
        </div>


    )
}

export default Footer