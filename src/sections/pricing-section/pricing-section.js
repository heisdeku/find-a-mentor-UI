import React from 'react';
import PriceCard from '../../Components/price-card/price-card';

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


const PricingSection = () => 
<div className="container mt-3">
    <div className="card-group justify-content-between col-lg-12 col-sm-10">
        {
            plans.map((plan, i) => 
                (<PriceCard key={i} {...plan} />)
            )
        }
    </div>
</div>
    

export default PricingSection;