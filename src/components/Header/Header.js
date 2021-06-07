// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ 
  getSearchResults, 
  handleSearch, 
  navToViewStories, 
  clearInput 
}) => {
  const submitSearch = () => {
    getSearchResults();
    clearInput();
  }

  return (
    <header className="header-app_header">
      <form className="header_search-form">
        <SearchIcon />
        <input 
          className="header_search-input"
          data-cy="header_search-input"
          type="text" 
          placeholder="Search by Article"
          onChange={(event) => handleSearch(event)}
          required
          />
        <Link to="stories">
          <button 
            className="header_search-button"
            data-cy="header_search-button" 
            onClick={() => submitSearch()}>
              Search
          </button>
        </Link>
      </form>
      <div className="header_nav-container">
        <Link 
          to="/" 
          className="header_nav-link" 
          data-cy="header_home-button">
            Home
        </Link>
        <Link 
          to="/stories" 
          className="header_nav-link" 
          data-cy="header_browse-button" 
          onClick={() => navToViewStories()}>
            View All Stories
        </Link>
      </div>
    </header>
  )
}

export default Header;