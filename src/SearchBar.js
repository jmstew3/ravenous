import React from 'react';

function SearchBar() {
    const searchBar = (
        <div className="searchItems">
            <input id="searchBox" type="business" placeholder="Search Businesses" />
            <input id="whereBox" type="location" placeholder="Where?" />
        </div>
    )

    return searchBar;
}

export default SearchBar;