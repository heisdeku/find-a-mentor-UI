import React from "react";
import './figures.css';

const FigureCards = ({title, number}) => 
        <div className="card border-light p-2 mt-5 text-center col-sm-4 col-md-4 mx-2 justify-content-center align-items-center">
            <h5 className="card-text bold">{title}</h5>
            <h4 className="card-text bold highlighted">{number}</h4>
        </div>

export default FigureCards;