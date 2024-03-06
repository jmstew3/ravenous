import React from 'react';
import styles from './Business.module.css';

const Business = ({ business }) => {
    return (
        <div className={styles.BoxItem}>
        <img src={business.imageSrc} alt="" />
        <div className={styles.ContentBox}>
            <div className={styles.Headline}>   
                <h1>{business.name}</h1>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className={styles.ContentRight}>
                    <p className={styles.Highlight}>{business.category.toUpperCase()}</p>
                    <p className={styles.HighlightSmall}>{`${business.rating} stars`}</p>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Business;