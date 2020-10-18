import React from 'react';

const PriceCard = ({ title, description, price, features, popularity}) => 
<div className="card card-item border-light col-md-4 d-flex flex-column pt-5 col-lg-4 mx-2 my-4">
    {
        popularity ?  <span className="badge badge-primary">Popular Plan</span> : null
    }
    <div className="container text-center">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
        <p className="card-text">
            <span className="amount"><sup>$</sup>{price}</span>/month
        </p>
        <div className="">
            <p className="card-subtitle">Key Features</p>
            <div className="text-left">
            {
                features.map((feature, i) => {
                    return (
                        <p key={i}>
                            <span className="d-inline-block mr-2 dot"></span>
                            {feature}
                        </p>
                )})
            }
            </div>            
        </div>
    </div>
</div>
    

export default PriceCard;