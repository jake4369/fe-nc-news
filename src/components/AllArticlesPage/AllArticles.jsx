import ArticleCard from "../Shared/ArticleCard";

const AllArticles = ({ articles }) => {
  const articleCards = articles.map((article) => {
    return <ArticleCard key={article.article_id} article={article} />;
  });

  return <section className="all-article-section">{articleCards}</section>;
};

export default AllArticles;
