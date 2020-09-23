import React from 'react';

import Container from 'react-bootstrap/Container'

import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';
import {TiSocialPinterest} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';

const Footer = () => {
    return (
        <div className="footer">
            <Container id="contact">
                <strong>Have a Question?</strong>
                <ul>
                    <li><a href="#home">Call Us: +1 (780) 255 2555</a></li>
                    <li><a href="#home">Help</a></li>
                    <li><a href="#home">Return Policy</a></li>
                    <li><a href="#home">Email Us</a></li>
                    <li><a href="#home">Feedback</a></li>
                </ul>
            </Container>
            <Container id="social">
                <strong>Follow Us</strong>
                <ul>
                    <li><a href="#home"><TiSocialFacebook size={50}/></a></li>
                    <li><a href="#home"><TiSocialInstagram size={50}/></a></li>
                    <li><a href="#home"><TiSocialTwitter size={50}/></a></li>
                    <li><a href="#home"><TiSocialPinterest size={50}/></a></li>
                </ul>
            </Container>
        </div>
    );
};

const CopyrightFooter = () => {
    return(
        <div className="copyright">
            <ul>
                <li><a href="#home"> <small>Terms of Use</small></a></li>
                <li><a href="#home"> <small>Privacy Notice</small></a></li>
                <li><a href="#home"> <small>Brand Protection</small></a></li>
                <li><a href="#home"> <small>Add Preferences</small></a></li>
            </ul>
            <small>© 2020 Shop Management Co. All Rights Reserved</small>
        </div>
    );
} 
export {Footer, CopyrightFooter};