import React from 'react';

import Features from '../../Components/features/features'
import Mentors from '../../Components/mentors/mentors'

import './hero-section.css'

const HeroSection = () => 
<div className="hero-section container">
    <div className="features row justify-content-center text-center">
        <h3>What we Offer ?</h3>
        { featureItems.map((item, i) => {
            return (
                <Features {...item} />
             )
        })}
    </div>
    <div className="mentors">
      <h3>Meet Our Mentors</h3>
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
  