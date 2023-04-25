import SingleArticle from "../components/SingleArticlePage/SingleArticle";
import NewArticles from "../components/Shared/NewArticles";
import TopThreeArticles from "../components/Shared/TopThreeArticles";

const SingleArticlePage = () => {
  return (
    <div className="single-article-page">
      <div className="flex-container">
        <SingleArticle />
        <NewArticles />
      </div>

      <TopThreeArticles />
    </div>
  );
};

export default SingleArticlePage;
