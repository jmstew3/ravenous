import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList(props) {
  return (
    <div className={styles.Center}>
      <ul className={styles.BoxItem}>
          {props.businesses.map((business,index) => (
            <li key={index}>
              <Business businessCard={business}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BusinessList;