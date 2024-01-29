import React from 'react';

const business = [
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Flavortown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Flavortown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
        name: "MarginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Flavortown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }
]


function Business() {
    const businesses = business.map((business, index) =>
        (
            <div key={index} className="biz-box-item">
                <img src={business.imageSrc}/>
                <div className="content-box">
                    <div className="headline">   
                        <h1>{business.name}</h1>
                    </div> 
                    <div className="content">
                        <div className="content-left">
                            <p>{business.address}</p>
                            <p>{business.city}</p>
                            <p>{business.state} {business.zipCode}</p>
                        </div>
                        <div className="content-right">
                            <p className="highlight">{business.category}</p>
                            <p className="highlight-small">{business.rating} stars</p>
                            <p>{business.reviewCount} reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return businesses;
}

export default Business;