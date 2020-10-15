import React, { Component } from 'react';

import Button from '../../Components/Button/button';
import NavbarItem from '../../Components/header/navbar-items/navbar'
import { ReactComponent as Logo} from '../../images/logo-vector.svg'
import './navbar.css'

let items = ['Home', 'About', 'Become A Mentor']

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light">
                <a href="shit.com" className="navbar-brand align-center">
                    <Logo 
                        style={styles}
                        className="d-inline-block" 
                     />
                    {/*               
                    <img 
                        src="../../images/logo-vector.svg"
                        alt="Find A Mentor Logo"
                        style={styles}
                        className="d-inline-block"
                    / > */}
                    <h5 className="logo-text text-500 d-inline">FindaMentor</h5>
                </a>
                <div className="hamburger navbar-toggler" role="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto navigation-list">
                {items.map((i, index) => {
                       return <NavbarItem text={i} key={index} />
                    })}
                    <form className="form-inline">
                    <Button 
                        text="BECOME A MENTEE"
                        classes="basic-btn"
                        style={ButtonStyle}
                    />
                    </form>
                    
                </ul>
                    
                </div>
            </div>
        )
    }

}
const styles = {
    height: "20px",
    maxWidth: "100%",
}
const ButtonStyle = {
    fontWeight: "700"
}
export default Navbar;