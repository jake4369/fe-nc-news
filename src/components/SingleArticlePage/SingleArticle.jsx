import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, [article_id]);

  console.log(article);

  const createdAt = article.created_at.split("T")[0];

  return (
    <div className="single-article__container">
      <h1 className="single-article__title">{article.title}</h1>

      <img
        src={article.article_img_url}
        alt=""
        className="single-article__img"
      />

      <div className="single-article__flex-container">
        <div className="single-article__author-info">
          <p className="single-article__author">{article.author}</p>
          <p className="single-article__created-at">{createdAt}</p>
        </div>

        <div className="single-article__stats">
          <p className="single-article__votes">
            Votes: <span className="single-article__stat">{article.votes}</span>
          </p>
          <p className="single-article__comment-count">
            Comments:{" "}
            <span className="single-article__stat">
              {article.comment_count}
            </span>
          </p>
        </div>
      </div>

      <p className="single-article__body">{article.body}</p>
    </div>
  );
};

export default SingleArticle;
