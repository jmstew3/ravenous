import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <body>
       <div id="heroBanner">
          <h1>ravenous</h1>
        </div>
      <SearchBar />
      <BusinessList />
    </body>
  );
}

export default App;