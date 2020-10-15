import React from 'react'

function NavbarItem(props) {
    const { text } = props;
    return (
            <li className="navbar-item py-2">
             {text}
            </li>
        
    )
}

export default NavbarItem;