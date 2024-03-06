import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.Center}>
      <ul className={styles.BoxItem}>
          {businesses.map((business,index) => (
            <li key={index}>
              <Business business={business} key={business.name}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BusinessList;