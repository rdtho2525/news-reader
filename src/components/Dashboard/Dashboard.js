import FeaturedArticle from '../FeaturedArticle/FeaturedArticle'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ articles }) => {
  const featuredArticle = articles.map((article, i) => {
    if (i === 0) {
      return (
        <Link to="" className="dashboard_featured-article">
          <FeaturedArticle article={article}/>
        </Link>
      )
    } 
  });

  const displayedArticles = articles.map((article, i) => {
    if (i > 0 && i < 5) {
      return (
        <Link to="" className="dashboard_article">
          <ArticleCard article={article}/>
        </Link>
      )
    }
  });

  return (
    <>
      <div>
        <header>
          <h2 className="header">Featured Article:</h2>
        </header>
        <section className="dashboard_featured-section">
          {featuredArticle}
        </section>
      </div>
      <div>
        <header>
          <h2 className="header">Around the U.S.:</h2>
        </header>
        <section className="dashboard_articles-section">
          {displayedArticles}
        </section>
      </div>
    </>
  )
}

export default Dashboard;