import { useState, useEffect } from 'react'
import { fetchUSStories } from '../../api';
import Dashboard from '../Dashboard/Dashboard.js';
import './App.css';
import 'normalize.css';

function App() {
  const [ articles, setArticles ] = useState([]);
  const [ error, setError ] = useState('');

  const getArticles = async () => {
    try {
      const stories = await fetchUSStories();
      setArticles(stories.results);
    } catch {
      setError('We\'re sorry, something went wrong! Please try again later.')
    }
  }

  useEffect(() => {
    getArticles();
  } , []);

  if (error) return <h2 className="app_error">⚠️ {error}</h2>;

  return (
    <>
      <Dashboard articles={articles} />
    </>
  )
}

export default App;
