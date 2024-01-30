import React from 'react';
import styles from './Business.module.css';

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
            <div key={index} className={styles.BoxItem}>
                <img src={business.imageSrc}/>
                <div className={styles.ContentBox}>
                    <div className={styles.Headline}>   
                        <h1>{business.name}</h1>
                    </div> 
                    <div className={styles.Content}>
                        <div className={styles.ContentLeft}>
                            <p>{business.address}</p>
                            <p>{business.city}</p>
                            <p>{business.state} {business.zipCode}</p>
                        </div>
                        <div className={styles.ContentRight}>
                            <p className={styles.Highlight}>{business.category.toUpperCase()}</p>
                            <p className={styles.HighlightSmall}>{business.rating} stars</p>
                            <p>{business.reviewCount} reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return businesses;
}

export default Business;