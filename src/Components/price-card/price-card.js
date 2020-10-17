import React from 'react';

const PriceCard = ({ title, description, price, features}) => 
    <div className="card border-light col-md-6 text-center p-4 mx-2">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
        <p className="card-text">
            <span className="amount">{price}</span>/month
        </p>
        <div className="">
            <p className="card-subtitle">Key Features</p>
            <ul>
                {
                    features.map((feature, i) => 
                     (<li key={i}>{feature}</li>)
                    )
                }
            </ul>
        </div>
    </div>

export default PriceCard;