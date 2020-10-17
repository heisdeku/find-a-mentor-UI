import React from "react";

import { ReactComponent as VectorOne}  from '../../images/vectored.svg';
import vector from '../../images/vector-2.png';
import vectorTwo from '../../images/Vector-3.png';
import vectorThree from '../../images/vector-4.png';
import vectorFour from '../../images/vector.png';

import './background.css'

const Backgrounds = () =>
    <div className="light-backgrounds">
        <VectorOne 
            className="bg-one"
        />
        <img 
            src={vector}
            className="bg-two"
            alt=""
        />
        <img 
            src={vectorTwo} 
            className="bg-three"
            alt=""
        />
        <img 
            src={vectorFour} 
            className="bg-four"
            alt=""
        />
        <img 
            src={vectorThree} 
            className="bg-six"
            alt=""
        />
        <img 
            src={vectorThree} 
            className="bg-five"
            alt=""
        />
    </div>

export default Backgrounds;