import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { useIsLoading } from "../../context/IsLoadingContext";

import LoadingSpinner from "./LoadingSpinner";

const TopThreeArticles = () => {
  const [topThreeArticles, setTopThreeArticles] = useState([]);
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((articlesData) => {
      const sortedArticles = articlesData.sort((a, b) => b.votes - a.votes);

      setTopThreeArticles(sortedArticles.slice(0, 3));

      setIsLoading(false);
    });
  }, []);

  const topArticles = topThreeArticles.map((article, index) => {
    return (
      <div className="top-article" key={article.article_id}>
        <img
          src={article.article_img_url}
          alt=""
          className="top-article__img"
        />
        <div className="top-article__text-container">
          <span className="top-article__number">0{index + 1}</span>
          <h3 className="top-article__heading">{article.title}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className="top-articles__container">
      {isLoading ? <LoadingSpinner /> : topArticles}
    </div>
  );
};

export default TopThreeArticles;
