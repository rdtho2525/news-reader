import { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Link } from 'react-router-dom';
import './BrowseArticles.css';

const BrowseArticles = ({ articles, searchResults, message }) => {
  const [ allArticles, setAllArticles ] = useState([])
  
  const determineAllArticles = () => {
    if (!!searchResults.length) {
      setAllArticles(searchResults);
    } else {
      setAllArticles(articles);
    }
  }

  const displayedStories = allArticles.map((article, i) => {
    return (
      <Link 
        to={article.title}
        className="browse-articles_article" 
        data-cy={`browse-articles_article-${i}`} 
        key={`${article.title}-${i}`}>
        <ArticleCard article={article}/>
      </Link>
    )
  });

  useEffect(() => {
    determineAllArticles();
  }, [searchResults])

  return (
    <>
      <div className="browse-articles_content-container">
        <h2 className="header" data-cy="header">{message}</h2>
        <section className="browse-articles_articles-section" data-cy="browse-articles_articles-section">
          {displayedStories}
        </section>
      </div>
    </>
  )
}

export default BrowseArticles;