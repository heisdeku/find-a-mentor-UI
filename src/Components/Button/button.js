import React from 'react';

const Button = ({text, classes}) =>
    <button 
        type="submit"
        className={classes}
    >
        {text}
    </button>

export default Button;