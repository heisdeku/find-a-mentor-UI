import React, { Component } from 'react';
import NavbarItem from '../../Components/header/navbar-items/navbar'

let items = ['Home', 'About', 'Become A Mentor']
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand">                
                    <img 
                        src="./images/logo-vector.svg"
                        alt="Find A Mentor Logo"
                    />
                    <h2 className="logo-text text-500">FindaMentor</h2>
                </div>
                    {items.map((i, index) => {
                       return <NavbarItem text={i} key={index} />
                    })}
                </div>
        )
    }

}

export default Navbar;