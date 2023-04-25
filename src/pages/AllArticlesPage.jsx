import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { useIsLoading } from "../context/IsLoadingContext";

import MostPopularArticle from "../components/AllArticlesPage/MostPopularArticle";
import AllArticles from "../components/AllArticlesPage/AllArticles";
import NewArticles from "../components/Shared/NewArticles";
import TopThreeArticles from "../components/Shared/TopThreeArticles";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const AllArticlesPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [mostPopularArticle, setMostPopularArticle] = useState(null);
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((articlesData) => {
      const sortedArticles = articlesData.sort((a, b) => b.votes - a.votes);

      setMostPopularArticle(sortedArticles[0]);
      setAllArticles(sortedArticles.slice(1));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="all-articles-page">
      <div
        className="flex-container"
        style={{
          marginBottom: isLoading ? "4rem" : "0",
        }}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <section className="articles-column">
            <MostPopularArticle article={mostPopularArticle} />
            <AllArticles articles={allArticles} />
          </section>
        )}

        <NewArticles />
      </div>

      <TopThreeArticles />
    </div>
  );
};

export default AllArticlesPage;
