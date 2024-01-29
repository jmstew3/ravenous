import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    const searchBar = (
        <header>
        <div className={styles.sortContainer}>
          <div className={styles.sortItems}>
            <div>
              <a href="#">Best<br/> Match</a>
            </div>
            <div>
              <a href="#">Highest<br/> Rated</a>
            </div>
            <div>
              <a href="#">Most<br/> Reviewed</a>
            </div>
          </div>
          <div className={styles.searchItems}>
            <input className={styles.searchBox} type="text" placeholder="Search Businesses" />
            <input className={styles.whereBox} type="text" placeholder="Where?" />
        </div>
          <a href="#">
            <button>Let's Go</button>
          </a>
        </div>
      </header>
    )

    return searchBar;
}

export default SearchBar