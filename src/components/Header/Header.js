import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <header className="header-app_header">
      <div className="header-search_container">
        <SearchIcon />
        <input className="header_search-input" type="text" placeholder="Search by Article"></input>
      </div>
      <Link to="/stories" className="header_stories-link">
        View Stories
      </Link>
    </header>
  )
}

export default Header;