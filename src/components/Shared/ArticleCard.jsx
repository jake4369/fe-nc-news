import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.article_img_url} alt="" className="article-card__img" />

      <Link to={`/articles/${article.article_id}`}>
        <p className="article-card__title">{article.title}</p>
      </Link>

      <p className="topic-link">{article.topic}</p>
    </div>
  );
};

export default ArticleCard;
