// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ getSearchResults, handleSearch, navToViewStories }) => {
  const submitSearch = () => {
    getSearchResults();
  }

  return (
    <header className="header-app_header">
      <div className="header-search_container">
        <SearchIcon />
        <input 
          className="header_search-input"
          type="text" 
          placeholder="Search by Article"
          onChange={(event) => handleSearch(event)}
          />
        <Link to="stories">
          <button 
            className="header_search-button" 
            onClick={() => submitSearch()}>
            Search
          </button>
        </Link>
      </div>
      <div className="header_nav-container">
        <Link to="/" className="header_nav-link" >
          Home
        </Link>
        <Link to="/stories" className="header_nav-link" onClick={() => navToViewStories()}>
          View All Stories
        </Link>
      </div>
    </header>
  )
}

export default Header;