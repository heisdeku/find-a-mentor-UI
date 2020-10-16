import React from 'react';
import './features.css'

const Features = ({imageSrc, text, description}) => {
    return (
        <div className="feature-item col-sm-6 col-lg-4 text-center my-3">
            <div className="img-round p-2 align-self-center" style={background}>
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