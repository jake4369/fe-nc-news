import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MostPopularArticle = ({ article }) => {
  return (
    <div className="most-popular-article">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to={`/articles/${article?.article_id}`}>
            <p className="most-popular-article__title">{article?.title}</p>
          </Link>

          <img
            src={article?.article_img_url}
            alt=""
            className="most-popular-article__img"
          />

          <p className="topic-link">{article?.topic}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MostPopularArticle;
