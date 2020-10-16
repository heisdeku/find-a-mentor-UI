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
                <a href="https://findamentor.netlify.com" className="navbar-brand align-center">
                    <Logo 
                        style={styles}
                     />
                    <h5 className="logo-text d-inline">FindaMentor</h5>
                </a>
                <div className="hamburger navbar-toggler" role="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul className="navbar-nav navigation-list">
                        {items.map((i, index) => {
                            return <NavbarItem text={i} key={index} />
                        })}
                        <form className="form-inline">
                        <Button 
                            text="BECOME A MENTEE"
                            classes="basic-btn btn-lg"
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
    width: "19px",
}
const ButtonStyle = {
    fontWeight: "700"
}
export default Navbar;