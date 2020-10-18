import React from 'react';
import PriceCard from '../../Components/price-card/price-card';
import FigureCards from "../../Components/figures/figures";



let plans = [
    {
        title: 'Basic',
        description: `A student-friendly price which has basic offers that you'll love`,
        price: 12,
        features: ['One-on-one-session'],
        popularity: false,
    },
    {
        title: 'Essential',
        description: 'Our top plan for the average mentee',
        price: 18,
        features: ["One-on-one session", "Design Feedback"],
        popularity: true,
    },
    {
        title: 'Premium',
        description: 'The best plan with the full package for our mentees',
        price: 33,
        features: ["One-on-one Session", "Design Feedback", "portfolio Review"],
        popularity: false,  
    },
]

const figures = [
    { title: "Number of Mentors", number: 85},
    { title: "Number of Mentees", number: 200}
  ]
  

const PricingSection = () => 
<div className="container mt-3">
    <div className="container my-5">
        <div className="figures mt-5 row card-group justify-content-between card-deck p-3">
        {
          figures.map((figure, key) => (<FigureCards {...figure} />)
          )
        }
        </div>
    </div>
    <div className="container">
        <h3 className="my-3 ml-3">Our Pricing Plans</h3>
        <div className="row card-group card-deck col-lg-12 m-0 p-0">
            {
                plans.map((plan, i) => 
                    (<PriceCard key={i} {...plan} />)
            )}
        </div>
    </div>
</div>
    

export default PricingSection;