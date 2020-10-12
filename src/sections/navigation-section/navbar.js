import React, { Component } from 'react';

import Button from '../../Components/Button/button';
import NavbarItem from '../../Components/header/navbar-items/navbar'

import './navbar.css'

let items = ['Home', 'About', 'Become A Mentor']

class Navbar extends Component {
    render() {
        return (
            <div className="navbar d-flex">
                <div className="navbar-brand">                
                    <img 
                        src="../../images/logo-vector.svg"
                        alt="Find A Mentor Logo"
                        style={styles}
                    />
                    <h5 className="logo-text text-500  d-inline">FindaMentor</h5>
                </div>
                <div className="hamburger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className="nav navigation-list">
                {items.map((i, index) => {
                       return <NavbarItem text={i} key={index} />
                    })}
                </ul>
                    <Button text="BECOME A MENTEE"/>
                </div>
        )
    }

}
const styles = {
    height: "22px",
    paddingRight: "3px",
    maxWidth: "100%",
}

export default Navbar;