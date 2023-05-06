import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ArticleCard = ({ article }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="article-card">
          <img
            src={article.article_img_url}
            alt=""
            className="article-card__img"
          />

          <Link
            to={`/articles/${article.article_id}`}
            onClick={() => scrollToTop()}
          >
            <p className="article-card__title">{article.title}</p>
          </Link>

          <Link to={`/topics/${article.topic}`} onClick={() => scrollToTop()}>
            <p className="topic-link">{article.topic}</p>
          </Link>

          <div className="article-stats">
            <p>
              Votes: <strong>{article.votes}</strong>
            </p>
            <p>
              Comments: <strong>{article.comment_count}</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticleCard;
