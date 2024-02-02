import React from 'react';
import styles from './Business.module.css';

function Business(props) {
    const businessCard = props.businessCard;
    
    return (
        <div className={styles.BoxItem}>
        <img src={businessCard.imageSrc}/>
        <div className={styles.ContentBox}>
            <div className={styles.Headline}>   
                <h1>{businessCard.name}</h1>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <p>{businessCard.address}</p>
                    <p>{businessCard.city}</p>
                    <p>{businessCard.state} {businessCard.zipCode}</p>
                </div>
                <div className={styles.ContentRight}>
                    <p className={styles.Highlight}>{businessCard.category.toUpperCase()}</p>
                    <p className={styles.HighlightSmall}>{businessCard.rating} stars</p>
                    <p>{businessCard.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Business;