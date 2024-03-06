import React, { useState } from 'react';
import styles from './SearchBar.module.css';

// getSortByClass = updates the styles to styles.active for <li> elements generated by sortByOptions
// handleSortByChange = a click handler that updates the sortBy state based on the sortByValue passed to it
// sortByOptions = the object that holds the three <li> sort items (Best Match, Highest Rated, Most Reviewed)
// sortByKey = the key (human-readable label) in the object sortByOptions (i.e. Best Match)
// sortByValue (let sortByValue = sortByOptions[sortByKey]) = the value (computer-readable value) associated with each key in sortByOptions (i.e. best_match)
// renderSortByOptions = creates html attributes for each <li> item based on value names for sortByOptions items

const sortByOptions = {
  //key (props)  :   value
  "Best Match":"best_match",
  "Highest Rated":"rating",
  "Most Reviewed":"review_count"
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByValue) => {
    if (sortBy === sortByValue) {
      return styles.active;
    }
    return "";
  };

  const handleTermChange = ({target}) => {
    setTerm(target.value);
  };

  const handleLocationChange = ({target}) => {
    setLocation(target.value);
  };

  const handleSortByChange = (sortByValue) => {
    setSortBy(sortByValue);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByKey => {
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
    <div className={styles.SearchBar}>
        <div className={styles.SortContainer}>
          <div className={styles.SortItems}>
            <ul>{renderSortByOptions()}</ul>
          </div>
          <form onSubmit={handleSearch}>
            <div className={styles.SearchItems}>
              <input className={styles.SearchBox} placeholder="Search Businesses" value={term} onChange={handleTermChange} />
              <input className={styles.WhereBox} placeholder="Where?" value={location} onChange={handleLocationChange} />
            </div>
            <div className={styles.SearchBarSubmit}>
              <button type="submit">Let's Go</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default SearchBar