import React from "react";

const FigureCards = ({title, number}) => 
        <div className="card border-light p-4 text-center col-sm-6 col-md-5">
            <h5 className="card-text">{title}</h5>
            <h5 className="card-text bold">{number}</h5>
        </div>

export default FigureCards;