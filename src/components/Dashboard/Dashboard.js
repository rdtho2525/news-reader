import FeaturedArticle from '../FeaturedArticle/FeaturedArticle'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ articles }, event) => {
  const featuredArticle = articles.map((article, i) => {
    if (i < 1) {
      return (
        <Link 
          to={article.title} 
          className="dashboard_featured-article" 
          data-cy="dashboard_featured-article" 
          key={`${article.title}-${i}`}>
          <FeaturedArticle article={article}/>
        </Link>
      )
    } 
  });

  const displayedArticles = articles.filter(article => {
    return article.section === 'us'
  }).map((article, i) => {
    if (i > 0 && i < 5) {
      return (
        <Link 
          to={article.title} 
          className="dashboard_article" 
          data-cy={`dashboard_article-${i}`} 
          key={`${article.title}-${i}`} 
          onClick={(event) => console.log(event.currentTarget)}>
          <ArticleCard article={article}/>
        </Link>
      )
    }
  });

  return (
    <>
      <div className="dashboard_content-container" data-cy="dashboard_content-container">
        <h2 className="header">Featured Article:</h2>
        <section className="dashboard_featured-section">
          {featuredArticle}
        </section>
      </div>
      <div className="dashboard_content-container">
        <h2 className="header">Around the U.S.:</h2>
        <section className="dashboard_articles-section">
          {displayedArticles}
        </section>
      </div>
    </>
  )
}

export default Dashboard;