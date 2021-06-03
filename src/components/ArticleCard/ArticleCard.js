import './ArticleCard.css';

const ArticleCard = ({ article }) => {

  return (
    <>
      <img className="article-card_img" src={article.multimedia[3].url} alt={article.multimedia[3].caption} />
      <p className="article-card_title">{article.title}</p>
    </>
  )
}

export default ArticleCard;