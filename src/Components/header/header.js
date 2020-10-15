import React from 'react';
import Button from '../Button/button';
import './header.css';
import Logo from '../../images/Illustrations-1.png';
const Header = (props) =>
<div>
<div className="container">
        {props.children}
        <div className="container hero-header my-2 col-lg-12">
            <div className="text-left col-lg-4">
            <h2>Get <span className="highlighted">Connected</span> to the best mentors in tech around the world</h2>
            <p>Finding a good mentor does not have to be difficult. We've got you covered</p>
            <Button text="Get Started" />
            </div>
            <div className="illustration-hero col-lg-6">
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
        src="../../images/background-frame.svg" 
        alt=""
        className="img-fluid"/>
    </div>
</div>
    


export default Header;