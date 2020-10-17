import React from 'react';
import PriceCard from '../../Components/price-card/price-card';
import FigureCards from "../../Components/figures/figures";

let plans = [
    {
        title: 'Basic',
        description: `A student-friendly price which has basic offers that you'll love`,
        price: 12,
        features: ['One-one-session']
    },
    {
        title: 'Essential',
        description: 'Our top plan for the average mentee',
        price: 18,
        features: ["one-one-one session", "Design Feedback"]
    },
    {
        title: 'Premium',
        description: 'The best plan with the full package for our meentees',
        price: 33,
        features: ["one-on-one Session", "Design Feedback", "porfolio Review"]
    },
]

const figures = [
    { title: "Number of Mentors", number: 85},
    { title: "Number of Mentees", number: 200}
  ]
  

const PricingSection = () => 
<div className="container mt-3">
    <div className="container">
        <div className="row card-group card-deck p-3">
        {
          figures.map((figure, key) => (<FigureCards {...figure} />)
          )
        }
        </div>
    </div>
    <div className="container">
        <div className="row card-group justify-content-between col-lg-12 m-0 p-0">
            {
                plans.map((plan, i) => 
                    (<PriceCard key={i} {...plan} />)
            )}
        </div>
    </div>
</div>
    

export default PricingSection;