import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MostPopularArticle = ({ article }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="most-popular-article">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link
            to={`/articles/${article?.article_id}`}
            onClick={() => scrollToTop()}
          >
            <p className="most-popular-article__title">{article?.title}</p>
          </Link>

          <img
            src={article?.article_img_url}
            alt=""
            className="most-popular-article__img"
          />

          <Link to={`/topics/${article?.topic}`} onClick={() => scrollToTop()}>
            <p className="topic-link">{article?.topic}</p>
          </Link>

          <div className="article-stats">
            <p>
              Votes: <strong>{article?.votes}</strong>
            </p>
            <p>
              Comments: <strong>{article?.comment_count}</strong>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MostPopularArticle;
