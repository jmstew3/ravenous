import React from 'react';
import styles from './BusinessList.module.css';
import Business from '../Business/Business';

function BusinessList(props) {
  return (
    <ul>
        {props.businesses.map((business,index) => (
          <li key={index}>
            <Business businessCard={business}/>
          </li>
        ))}
    </ul>
  );
}

export default BusinessList;