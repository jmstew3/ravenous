import React from 'react';

const businessData = {
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipcode: "10101",
    category: "Italian",
    rating: "4.5",
    reviewCount: "90"
};

function Business() {
    return (
        <div>
            image={businessData.image}
            name={businessData.name}
            address={businessData.address}
            city={businessData.city}
            state={businessData.state}
            zipcode={businessData.zipcode}
            category={businessData.category}
            rating={businessData.rating}
            reviewCount={businessData.reviewCount}
        </div>
    );
}

export default Business