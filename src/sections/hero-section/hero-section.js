import React from 'react';

import Features from '../../Components/features/features'
import Mentors from '../../Components/mentors/mentors'

import './hero-section.css'

const HeroSection = () => 
<div className="hero-section container-fluid my-5 px-4">
    <div className="features container mb-5">
        <h3 className="mb-3">What we Offer ?</h3>
        <div className="row justify-content-center align-items-center">
        { featureItems.map((item, i) => {
            return (
                <Features key={i} {...item} />
             )
        })}
        </div>
    </div>
    <div className="mentors container">
      <h3 className="mb-3">Our Mentors</h3>
        <Mentors />
    </div>

</div>

const featureItems = [
    {
      imageSrc: '',
      text: 'One-One-Session',
      description: 'Mentor and mentee one on one session',
    },
    {
      imageSrc: '',
      text: 'Design Feedback',
      description: 'Get access to top class design feeback',
    },
    {
      imageSrc: '',
      text: 'Portfolio Review',
      description: 'Your portfolio gets reviewed',
    },
]


export default HeroSection;
  