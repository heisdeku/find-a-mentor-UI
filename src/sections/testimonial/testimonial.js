import React from "react";
import Female from '../../images/Ellipse-8.png'
const TestimonialSection = () => 
<div className="carousel-section">
    <a className="carousel-control-prev" href="#carouselFlowControls" data-slide="prev" role="button">
        <span className="prev"></span>
    </a>
    <a className="carousel-control-next" href="#carouselFlowControls" role="button" data-slide="next">
        <span className="next"></span>
    </a>
    <div className="carousel slide carousel-section-inner d-flex" data-ride="carousel" id="carouselFlowControls">
        <div className="carousel carousel-inner">
            <div className="image">
                <img src={Female} alt="" />
            </div>
            <div className="testimonial-text">
                <p>My design journey would not be complete without Find A Mentor, i movef from a novice to a pro in just 3 months</p>
                <div className="testimonial-Name">
                    <h4>Vanessa Hill</h4>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
    </div>
</div>

export default TestimonialSection;