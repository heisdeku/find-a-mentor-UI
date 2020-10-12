import React from 'react';
import Button from '../Button/button';
import './header.css';
const Header = (props) =>
<div>
<div className="container">
        {props.children}
        <div className="container-sm mx-3 my-2">
            <div className="text-left">
            <h2>Get Connected to the best mentors in tech around the world</h2>
            <p>Finding a good mentor does not have to be difficult. We've got you covered</p>
            <Button text="Get Started" />
            </div>
            <div className="illustration-hero">
                <img 
                    src="../../images/Illustrations 1.png" alt=""
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