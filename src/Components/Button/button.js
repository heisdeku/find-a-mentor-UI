import React from 'react';

const Button = ({text, classes}) =>
    <button 
        type="submit"
        className={"btn btn-primary btn-lg " + classes}
    >
        {text}
    </button>

export default Button;