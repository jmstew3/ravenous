import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';


const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];
  
function App() {
  return (
    <div>
       <div id="heroBanner">
          <h1>ravenous</h1>
        </div>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;