import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ArticleCard = ({ article }) => {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="article-card">
          <img
            src={article.article_img_url}
            alt=""
            className="article-card__img"
          />

          <Link to={`/articles/${article.article_id}`}>
            <p className="article-card__title">{article.title}</p>
          </Link>

          <Link to={`/topics/${article.topic}`}>
            <p className="topic-link">{article.topic}</p>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticleCard;
