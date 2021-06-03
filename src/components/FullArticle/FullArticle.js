import { ContactSupportOutlined } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import './FullArticle.css';

const FullArticle = ({ title, articles }) => {
  const [ currentArticle, setCurrentArticle ] = useState('');

  const findCurrentArticle = () => {
    const foundArticle = articles.find(article => article.title === title)
    setCurrentArticle(foundArticle)
  }

  useEffect(() => {
    findCurrentArticle();
  })
  
  return (
    <>
      {currentArticle && (
      <>
        <section className="full-article_section">
          <img className="full-article_img" src={currentArticle.multimedia[0].url} alt={currentArticle.multimedia[0].caption}/>
          <aside className="full-article_photo-caption-container">
            <p className="full-article_photo-caption">{currentArticle.multimedia[0].caption}</p>
            <div className="full-article_dates">
              <p>Published: {currentArticle.published_date}</p>
              <p>Last updated: {currentArticle.updated_date}</p>
            </div>
          </aside>
          <h2 className="full-article_title">{currentArticle.title}</h2>
          <h3 className="full-article_abstract">{currentArticle.abstract}</h3>
          <h4 className="full-article_byline">{currentArticle.byline}</h4>
          <p className="full-article_external-link">View full story <a href={currentArticle.url}>here</a>:</p>
        </section>
        <footer className="full-article_footer">{currentArticle.copyright}</footer>
      </>
      )}
    </>
  )
}

export default FullArticle;