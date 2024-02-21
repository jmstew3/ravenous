import React, { useState } from 'react';
import styles from './SearchBar.module.css';

// sortByOptions = the object that holds the three <li> sort items (Best Match, Highest Rated, Most Reviewed)
// sortByKey = the key (human-readable label) in the object sortByOptions (i.e. Best Match)
// sortByValue = the value (computer-readable value) associated with each key in sortByOptions (i.e. best_match)
// sortByOptionValue = the values associated with each key in the sortByOptions object
// handleSortByChange = a click handler that sets the key in the object sortByOptions to sortBy when an <li> is clicked on

const sortByOptions = {
  // key:value
  "Best Match":"best_match",
  "Highest Rated":"rating",
  "Most Reviewed":"review_count"
};

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByValue) => {
    if (sortBy === sortByValue) {
      return styles.active;
    }
    return "";
  };

  const handleSortByChange = (sortByValue) => {
    setSortBy(sortByValue);
  };


  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByKey) => {
      let sortByValue = sortByOptions[sortByKey];
      return (
        <li
          className={getSortByClass(sortByValue)}
          key={sortByKey}
          onClick={() => {handleSortByChange(sortByValue);}}
        >
          {sortByKey}
        </li>
      );
    });
  };

  return (
    <header>
        <div className={styles.SortContainer}>
          <div className={styles.SortItems}>
            <ul>{renderSortByOptions()}</ul>
          </div>
          <div className={styles.SearchItems}>
            <input className={styles.SearchBox} placeholder="Search Businesses" />
            <input className={styles.WhereBox} placeholder="Where?" />
        </div>
          <a href="#">
            <button>Let's Go</button>
          </a>
        </div>
    </header>
  );
};

export default SearchBar