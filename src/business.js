import React from 'react';

const business = {
    imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipcode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (
        <h1>{business.name}</h1>
        // <img src="{business.imageSrc}"/>
    );
}

export default Business