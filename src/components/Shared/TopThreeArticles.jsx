import { useState } from "react";
import TopThreeArticlesData from "../../articlesData/topThreeArticles";

const TopThreeArticles = () => {
  const [topThreeArticles, setTopThreeArticles] =
    useState(TopThreeArticlesData);

  const topArticles = topThreeArticles.map((obj) => {
    return (
      <div className="top-article" key={obj.id}>
        <img src={obj.image} alt="" className="top-article__img" />
        <div className="top-article__text-container">
          <span className="top-article__number">0{obj.id}</span>
          <h3 className="top-article__heading">{obj.heading}</h3>
          <p className="top-article__text">{obj.text}</p>
        </div>
      </div>
    );
  });
  return <div className="top-articles__container">{topArticles}</div>;
};

export default TopThreeArticles;
