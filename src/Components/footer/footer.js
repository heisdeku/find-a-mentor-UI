import React from 'react';
import './footer.css';

import GoogleIcon from '../../images/Google.svg';
import FacebookIcon from '../../images/Facebook.svg';
import TwitterIcon from '../../images/Twitter.svg';

const Footer = () => 
    <footer className="footer pt-4">
        <div className="container h-50 mt-3">
            <div className="row justify-content-start p-md-4">
                <div className="footer__social-icons col-sm-6 col-md-4 col-lg-4 mt-4">
                    <h6 className="footer__bold">Follow Us</h6>
                    <div className="google-icon pl-3 py-2">
                        <img src={GoogleIcon} className="img-fluid" alt="" />
                    </div>
                    <div className="facebook-icon pl-3 py-2">
                        <img src={FacebookIcon} className="img-fluid" alt="" />
                    </div>    
                    <div className="twitter-icon pl-3 py-2">
                        <img src={TwitterIcon} className="img-fluid" alt="" />
                    </div>             
                </div>     
                <div className="footer__information col-sm-6 col-md-4 col-lg-4 my-4">
                    <h6 className="footer__bold">Information</h6>
                    <ul>
                    <li>Reviews</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    </ul>                    
                </div>
                <div className="footer__contact col-sm-6 col-md-4 col-lg-4 mt-4">
                    <h6 className="footer__bold">Contact Details</h6>
                    <ul>
                    <li>+234567890</li>
                    <li>findamentor@gmail.com</li>
                    <li>6 Spring Road, Lekki Lagos</li>
                    </ul>                    
                </div>
            </div>
        </div>
    </footer>


export default Footer;