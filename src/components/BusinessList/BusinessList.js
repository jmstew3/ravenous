import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';

function BusinessList(props) {
  return (
    <div className={styles.Center}>
      <ul className={styles.BoxItem}>
          {props.businesses.map((business,index) => (
            <li key={index}>
              <Business business={business}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BusinessList;