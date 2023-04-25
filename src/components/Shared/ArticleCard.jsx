const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.article_img_url} alt="" className="article-card__img" />

      <p className="article-card__title">{article.title}</p>

      <p className="topic-link">{article.topic}</p>
    </div>
  );
};

export default ArticleCard;
