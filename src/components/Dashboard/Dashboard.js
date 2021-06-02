import FeaturedArticle from '../FeaturedArticle/FeaturedArticle'
import ArticleCard from '../ArticleCard/ArticleCard'
import './Dashboard.css';

const Dashboard = ({ articles }) => {
  const featuredArticle = articles.map((article, i) => {
    if (i === 0) {
      return (
        <article className="dashboard_featured-article">
          <FeaturedArticle article={article}/>
        </article>
      )
    } 
  });

  const displayedArticles = articles.map((article, i) => {
    if (i > 0 && i < 5) {
      return (
        <article className="dashboard_article">
          <ArticleCard article={article}/>
        </article>
      )
    }
  });

  return (
    <>
      <section className="dashboard_featured-section">
        {featuredArticle}
        {/* {console.log(featuredArticle)} */}
      </section>
      <section className="dashboard_articles-section">
        {displayedArticles}
      </section>
    </>
  )
}

export default Dashboard;