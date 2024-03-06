import React, { useState } from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';
  
const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };
  
  return (
    <div>
       <div class="heroBanner">
          <h1><a href="/">ravenous</a></h1>
        </div>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;