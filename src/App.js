import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList.js'

function App() {
  return (
    <body>
      <header>
        <div id="heroBanner">
          <h1>ravenous</h1>
        </div>
        <div className="sortContainer">
          <div className="sortItems">
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
          <div className="searchItems">
            <input id="searchBox" type="business" placeholder="Search Businesses" />
            <input id="whereBox" type="location" placeholder="Where?" />
          </div>
          <a href="#">
            <button>Let's Go</button>
          </a>
        </div>
      </header>
      <BusinessList />
    </body>
  );
}

export default App;