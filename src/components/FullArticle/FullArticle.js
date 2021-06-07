import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
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
        <Link to="/" className="full-article_back-button click" data-cy="full-article_back-button">
          <KeyboardReturnIcon className="full-article_return-arrow"/>
            Back
        </Link>         
        <section className="full-article_section">
          <h2 className="full-article_title" data-cy="full-article_title">{currentArticle.title}</h2>
          <h3 className="full-article_abstract" data-cy="full-article_abstract">{currentArticle.abstract}</h3>
          <h4 className="full-article_byline" data-cy="full-article_byline">{currentArticle.byline}</h4>
          <img 
            className="full-article_img" 
            data-cy="full-article_img" 
            src={currentArticle.multimedia[0].url} 
            alt={currentArticle.multimedia[0].caption}
            />
          <aside className="full-article_photo-caption-container">
            <p className="full-article_photo-caption" data-cy="full-article_photo-caption">{currentArticle.multimedia[0].caption}</p>
            <div className="full-article_dates">
              <p data-cy="full-article_published-date">Published: {currentArticle.published_date}</p>
              <p data-cy="full-article_date-updated">Last updated: {currentArticle.updated_date}</p>
            </div>
          </aside>
          <p className="full-article_link-text">
            View full story: <a 
              className="full-article_external-link" 
              data-cy="full-article_external-link" 
              href={currentArticle.url} 
              target="_blank"> 
                here
              </a>
          </p>
        </section>
      </>
      )}
    </>
  )
}

export default FullArticle;