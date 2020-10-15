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
            className="img-fluid"
        />
        <img src={vector} className="img-fluid" alt=""/>
        <img src={vectorTwo} className="img-fluid" alt=""/>
        <img src={vectorFour} className="img-fluid" alt=""/>
        <img src={vectorThree} className="img-fluid" alt=""/>
    </div>

export default Backgrounds;