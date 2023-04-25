import { useState } from "react";
import articleData from "../../articlesData/newArticles";

const NewArticles = () => {
  const [newArticles, setNewArticles] = useState(articleData);

  const articles = newArticles.map((obj) => {
    return (
      <div className="new-article" key={obj.id}>
        <h3 className="new-article__heading">{obj.heading}</h3>
        <p className="new-article__text">{obj.text}</p>
      </div>
    );
  });

  return (
    <div className="new-articles__container">
      <h2>New</h2>
      {articles}
    </div>
  );
};

export default NewArticles;
