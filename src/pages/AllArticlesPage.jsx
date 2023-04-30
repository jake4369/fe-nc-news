import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { useIsLoading } from "../context/IsLoadingContext";
import { motion, AnimatePresence } from "framer-motion";

import MostPopularArticle from "../components/AllArticlesPage/MostPopularArticle";
import AllArticles from "../components/AllArticlesPage/AllArticles";
import NewArticles from "../components/Shared/NewArticles";
import TopThreeArticles from "../components/Shared/TopThreeArticles";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import SortArticles from "../components/Shared/SortArticles";

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

  const handleSort = (sortBy, sortOrder) => {
    let sorted = [...allArticles];

    if (sortBy === "created_at") {
      sorted.sort((a, b) => {
        if (sortOrder === "desc") {
          return new Date(b.created_at) - new Date(a.created_at);
        } else {
          return new Date(a.created_at) - new Date(b.created_at);
        }
      });
    } else if (sortBy === "comment_count") {
      sorted.sort((a, b) => {
        if (sortOrder === "desc") {
          return b.comment_count - a.comment_count;
        } else {
          return a.comment_count - b.comment_count;
        }
      });
    } else if (sortBy === "votes") {
      sorted.sort((a, b) => {
        if (sortOrder === "desc") {
          return b.votes - a.votes;
        } else {
          return a.votes - b.votes;
        }
      });
    }

    setAllArticles(sorted);
  };

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

            <SortArticles handleSort={handleSort} />

            <AnimatePresence>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <AllArticles articles={allArticles} />
              </motion.div>
            </AnimatePresence>
          </section>
        )}

        <NewArticles />
      </div>

      <TopThreeArticles />
    </div>
  );
};

export default AllArticlesPage;
