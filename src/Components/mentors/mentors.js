import React from "react";
import Button from "../Button/button";
import ImageTwo from '../../images/Ellipse-6.png'
import ImageOne from '../../images/Ellipse-7.png'
import ImageThree from '../../images/Ellipse-5.png'

import './mentors.css'
const Mentors = () =>
    <div className="mentors-section">
        <div className="mentors-images">
            <div>
                <img 
                src={ImageTwo}
                alt="" 
                className="img-fluid person-one"            
                />
            </div>
            <div>
                <img 
                src={ImageThree} 
                alt="" 
                className="img-fluid person-two"
            />
            </div>
            <div>
                <img 
                src={ImageOne} 
                alt="" 
                className="img-fluid person-three"            
                />
            </div>                
        </div>
        <div className="words">
            <p>We have mentors who have worked with top tech companies and are very experienced in their field.
            Our mentors are friendly and people who can instantly connect with
            </p>
            <Button text="View All"/>
        </div>
    </div>

export default Mentors;
