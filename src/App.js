import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList.js'

function App() {
  return (
    <body>
      <header>
        <div className="sortContainer">
          <div className="sortItems">
            <div>Best<br/> Match</div>
            <div>Highest<br/> Rated</div>
            <div>Most<br/> Reviewed</div>
          </div>
          <div className="searchItems">
            <div id="searchBox">Search Businesses</div>
            <div id="whereBox">Where?</div>
          </div>
          <button>
            Let's Go
          </button>
        </div>
      </header>
      <BusinessList />
    </body>
  );
}

export default App;