import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ getSearchResults }) => {
  // const handleSearch = (e) => {
  //   getSearchResults(e);
  // }

  return (
    <header className="header-app_header">
      <div className="header-search_container">
        <SearchIcon />
        <input className="header_search-input" type="text" placeholder="Search by Article"></input>
        <button className="header_search-button">Search</button>
      </div>
      <Link to="/stories" className="header_stories-link">
        View Stories
      </Link>
    </header>
  )
}

export default Header;