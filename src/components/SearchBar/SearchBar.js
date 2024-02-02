import React from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match":"best_match",
  "Highest Rated":"rating",
  "Most Reviewed":"review_count"
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}><a href={`/${sortByOptionValue}`}>{sortByOption}</a></li>;
    });
  };

  return (
    <header>
        <div className={styles.SortContainer}>
          <div className={styles.SortItems}>
            <ul>{renderSortByOptions()}</ul>
          </div>
          <div className={styles.SearchItems}>
            <input className={styles.SearchBox} type="text" placeholder="Search Businesses" />
            <input className={styles.WhereBox} type="text" placeholder="Where?" />
        </div>
          <a href="#">
            <button>Let's Go</button>
          </a>
        </div>
      </header>
  );

};

export default SearchBar