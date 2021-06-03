import './FeaturedArticle.css';

const FeaturedArticle = ({ article }) => {

  return (
    <>
      <img className="featured-article_img" src={article.multimedia[0].url} alt={article.title} />
      <p className="featured-article_title">{article.title}</p>
      <p className="featured-article_preview"></p>
    </>
  )
}

export default FeaturedArticle;