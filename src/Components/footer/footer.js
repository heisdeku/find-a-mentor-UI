import React from 'react';
import './footer.css';

const Footer = () => 
    <footer className="footer">
        <div className="container h-50">
            <div className="row justify-content-start">
                <div className="footer__social-icons">
                    <div className="google-icon">
                        <span>
                            <i className="fab fa-google"></i>
                        </span>
                    </div>
                    <div className="facebook-icon">
                        <span>
                            <i className="fab fa-facebook"></i>
                        </span>
                    </div>                 
                </div>
                <div className="footer__information">
                    <p>Reviews</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div className="footer__contact">
                    <p>+234567890</p>
                    <p>findamentor@gmail.com</p>
                    <p>6 Spring Road, Lekki Lagos</p>
                </div>
            </div>
        </div>
    </footer>


export default Footer;