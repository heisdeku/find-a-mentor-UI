import React from 'react';
import Button from '../Button/button';
import './header.css';

import Logo from '../../images/Illustrations-1.png';
import BackgroundFrame from '../../images/background-frame.svg'
const Header = (props) =>
<div>
<div className="container header">
        {props.children}
        <div className="container hero-header mt-5 col-lg-12">
            <div className="text-left col-lg-6 mt-4">
                <h2>Get <span className="highlighted">Connected</span> to the <span className="highlighted">best</span> mentors in tech around the world</h2>
            <p className="my-3">Finding a good mentor does not have to be difficult. We've got you covered</p>
            <Button text="Get Started" />
            </div>
            <div className="illustration-hero col-lg-5">
                <img 
                    src={Logo} 
                    alt=""
                    className="img-fluid"    
                />
            </div>
        </div>
    </div> 
    <div className="big-background-overlay">
    <img 
        src={BackgroundFrame} 
        alt="Big Background Frame"
        className="img-fluid"/>
    </div>
</div>
    


export default Header;