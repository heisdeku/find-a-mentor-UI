import React from 'react';
import'./button.css';

const Button = ({text, classes}) =>
    <button 
        type="submit"
        className={"btn btn-primary " + classes}
    >
        {text}
    </button>

export default Button;