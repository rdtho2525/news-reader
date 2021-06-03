import { useState, useEffect } from 'react'
import { fetchUSStories } from '../../api';
import Dashboard from '../Dashboard/Dashboard.js';
import Header from '../Header/Header.js';
import FullArticle from '../FullArticle/FullArticle.js';
import BrowseArticles from '../BrowseArticles/BrowseArticles.js';
import { CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'normalize.css';

function App() {
  const [ articles, setArticles ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ message, setMessage ] = useState('')
  const [ searchInput, setSearchInput ] = useState('');
  const [ error, setError ] = useState('');

  const getArticles = async () => {
    try {
      const stories = await fetchUSStories();
      setArticles(stories.results);
    } catch {
      setError('We\'re sorry, something went wrong! Please try again later.')
    }
  }

  const getSearchResults = () => {
   const results = articles.filter(article => article.title.toLowerCase().includes(searchInput))
   setSearchResults(results);

   if (!!results.length) {
      setMessage(`Search results for: '${searchInput}'`);
    } else {
      setMessage(`There were no search results for: '${searchInput}'`);
    }
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  }

  const navToViewStories = () => {
    setMessage('Viewing All Stories');
    setSearchResults([]);
    clearInput();
  }

  const clearInput = () => {
    setSearchInput('');
  }

  useEffect(() => {
    getArticles();
  } , []);


  return (
    <>
      <Header 
      getSearchResults={getSearchResults}
      handleSearch={handleSearch}
      navToViewStories={navToViewStories}
      clearInput={clearInput}
      />
      {error && <h2 className="app_error">⚠️ {error}</h2>}
      {!error &&
      <main className="app_main">
        <Switch>
          <Route exact path="/stories">
            {!articles.length ? <CircularProgress /> :
            <BrowseArticles 
              articles={articles}
              searchResults={searchResults}
              message={message}
            />}
          </Route>
          <Route exact path="/">
            {!articles.length ? <CircularProgress /> :
            <Dashboard articles={articles} />}
          </Route>
          <Route exact path="/:title" render={({ match }) => {
            const { title } = match.params;
            return (
              <FullArticle
                title={title}
                articles={articles}
              />
            )
          }} />
        </Switch>
      </main>
      }
    </>
  )
}

export default App;
