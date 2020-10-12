import React from 'react';

const Header = (props) =>
    <div className="container">
        {props.children}
        <div className="container-sm mx-3">
            <div className="">
            <h2>Get Connected to the best mentors in tech around the world</h2>
            <p>Finding a good mentor does not have to be difficult. We've got you covered</p>
            </div>
            <div className="illustration-hero">
                <img src="../../images/Illustrations 1.png" alt=""/>
            </div>
        </div>
    </div> 


export default Header;