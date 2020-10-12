import React from 'react';

const Features = ({imageSrc, text, description}) => {
    return (
        <div className="feature-item">
            <div className="w-25" style={background}>
                <img src={imageSrc} alt={description} />
            </div>
            <div className="feature-item-text">
                {text}
            </div>
        </div>
        
    )
}

const background = {
    backgroundColor: "#E1A1ED"
}

export default Features