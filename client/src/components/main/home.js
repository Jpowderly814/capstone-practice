import React from 'react';
import './home.css';

//import {BrowserRouter as Router, Route} from 'react-router-dom';

function Home() {
  return (
  
        
    

    <div className="home-search-container">
        <div className="home-search-box">
        <input type="text" class="home-search-input" id="searchTerm" name="searchTerm" placeholder="Enter a State, City, or Zip Code"/>
        <button type="submit" class="home-search-btn" value="Search"  ><span>Search</span></button>

        </div>

    </div>
   
     
  );
}

export default Home;