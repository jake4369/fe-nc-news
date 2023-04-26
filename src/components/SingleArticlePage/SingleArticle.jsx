import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";
import { useIsLoading } from "../../context/IsLoadingContext";

import LoadingSpinner from "../Shared/LoadingSpinner";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div className="single-article__container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="single-article__title">{article?.title}</h1>

          <img
            src={article?.article_img_url}
            alt=""
            className="single-article__img"
          />

          <div className="single-article__flex-container">
            <div className="single-article__author-info">
              <p className="single-article__author">{article?.author}</p>
              <p className="single-article__created-at">
                {article?.created_at.split("T")[0]}
              </p>
            </div>

            <p className="single-article__body">{article?.body}</p>

            <div className="single-article__stats">
              <p className="single-article__votes">
                Votes:{" "}
                <span className="single-article__stat">{article?.votes}</span>
              </p>
              <p className="single-article__comment-count">
                Comments:{" "}
                <span className="single-article__stat">
                  {article?.comment_count}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
