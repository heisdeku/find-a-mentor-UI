import React from 'react';
import './footer.css';

const Footer = () => 
    <footer className="footer">
        <div className="container h-50">
            <div className="row justify-content-start p-md-4">
                <div className="footer__social-icons col-sm-6">
                    <div className="google-icon">
                        <span className="fab fa-google"></span>
                    </div>
                    <div className="facebook-icon">
                        <span className="fab fa-facebook"></span>
                    </div>    
                    <div className="twitter-icon">
                        <span className="fab fa-twitter"></span>
                    </div>             
                </div>     
                <div className="footer__information col-sm-6">
                    <ul>
                    <li>Reviews</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    </ul>                    
                </div>
                <div className="footer__contact col-lg-4">
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