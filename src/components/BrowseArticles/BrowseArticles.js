import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from 'react-router-dom';
import './BrowseArticles.css';

const BrowseArticles = ({ articles }) => {
  console.log('hi')
  console.log(articles)
  const displayedStories = articles.map((article, i) => {
    return (
      <Link to={article.title} className="browse-articles_article" key={`${article.title}-${i}`}>
        <ArticleCard article={article}/>
      </Link>
    )
  });

  return (
    <>
      <div className="browse-articles_content-container">
        <h2 className="header">Viewing All Stories:</h2>
        <section className="browse-articles_articles-section">
          {displayedStories}
        </section>
      </div>
    </>
  )
}

export default BrowseArticles;