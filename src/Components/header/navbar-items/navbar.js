import React from 'react'

function NavbarItem(props) {
    const { text } = props;
    return (
        <li className="navbar-text">{text}</li>
    )
}

export default NavbarItem;