import React from 'react';

const businessData = ['image', 'name', 'address', 'city', 'state', 'zipcode', 'category', 'rating', 'reviewCount'];
const listItems = businessData.map(data => <li>{data}</li>);

function Business() {
    return (
        <li>{listItems}</li>
    );
}

export default Business