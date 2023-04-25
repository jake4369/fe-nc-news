import { Link } from "react-router-dom";

const MostPopularArticle = ({ article }) => {
  return (
    <div className="most-popular-article">
      <Link to={`/articles/${article?.article_id}`}>
        <p className="most-popular-article__title">{article?.title}</p>
      </Link>

      <img
        src={article?.article_img_url}
        alt=""
        className="most-popular-article__img"
      />

      <p className="topic-link">{article?.topic}</p>
    </div>
  );
};

export default MostPopularArticle;
