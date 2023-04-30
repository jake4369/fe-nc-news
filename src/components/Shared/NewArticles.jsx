import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getAllArticles } from "../../utils/api";

const NewArticles = () => {
  const [newArticles, setNewArticles] = useState([]);

  useEffect(() => {
    getAllArticles(null, "created_at", "desc").then((articlesData) => {
      setNewArticles(articlesData.slice(0, 3));
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const articles = newArticles.map((article) => {
    return (
      <div className="new-article" key={article.article_id}>
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to={`/articles/${article.article_id}`}
              onClick={() => scrollToTop()}
            >
              <h3 className="new-article__heading">{article.title}</h3>
            </Link>
            <p className="new-article__text">
              {article.body.substring(0, 92) + "..."}
            </p>
          </motion.div>
        </AnimatePresence>
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
