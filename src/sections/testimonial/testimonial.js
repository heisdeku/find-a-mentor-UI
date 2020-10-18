import React from "react";
import Female from '../../images/Ellipse-8.png'
const TestimonialSection = () => 
<div className="carousel-section container">
    <div className="container">
    <h3 className="my-3">Testimonials</h3>
    <div className="carousel">
        <div className="carousel slide carousel-section-inner d-flex" data-ride="carousel" id="carouselFlowControls">
            <div className="carousel-inner mb-5">
            <a className="carousel-control-prev"                
            href="#carouselFlowControls" 
            data-slide="prev" role="button">
            <span className="fas fa-chevron-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next"    
            href="#carouselFlowControls" role="button" data-slide="next">
            <span className="fas fa-chevron-right"></span>
        </a>
                <div className="carousel-item active container">
                <div className="image col-md-6">
                    <img src={Female} alt="" className="img-fluid"/>
                </div>
                <div className="testimonial-text col-md-6 align-self-end">
                    <p>My design journey would not be complete without Find A Mentor, I moved from a novice to a pro in just 3 months</p>
                    <div className="testimonial-details">
                        <h4>Vanessa Hill</h4>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
</div>

export default TestimonialSection;