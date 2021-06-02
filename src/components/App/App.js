import { useState, useEffect } from 'react'
import './App.css';
import 'normalize.css';
import { fetchUSStories } from '../../api';

function App() {
  const [ articles, setArticles ] = useState([]);
  const [ error, setError ] = useState('');

  const getArticles = async () => {
    try {
      const stories = await fetchUSStories();
      setArticles(stories);
    } catch {
      setError('We\'re sorry, something went wrong! Please try again later.')
    }
  }

  useEffect(() => {
    getArticles();
  } , []);

  return (
    <>
    </>
  )
}

export default App;
