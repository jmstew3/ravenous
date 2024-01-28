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
    }
]

function Business() {
    return (
        <div className="biz-box-item">
            <img src={business[0].imageSrc}/>
            <div className="content-box">
            <div className="headline">   
                <h1>{business[0].name}</h1>
            </div> 
                <div className="content">
                    <div className="content-left">
                        <p>{business[0].address}</p>
                        <p>{business[0].city}</p>
                        <p>{business[0].state} {business[0].zipCode}</p>
                    </div>
                    <div className="content-right">
                        <p class="highlight">{business[0].category}</p>
                        <p class="highlight-small">{business[0].rating} stars</p>
                        <p>{business[0].reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business