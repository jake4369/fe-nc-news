import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle, updateArticleVotes } from "../../utils/api";
import { useIsLoading } from "../../context/IsLoadingContext";
import { motion, AnimatePresence } from "framer-motion";
import { BsHandThumbsUpFill } from "react-icons/bs";

import LoadingSpinner from "../Shared/LoadingSpinner";

const SingleArticle = ({ newCommentPosted, commentDeleted }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const [hasVoted, setHasVoted] = useState(
    localStorage.getItem(`article_${article_id}_voted`) === "true"
  );
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    getArticle(article_id).then((articleData) => {
      setCommentCount(articleData.comment_count);
    });
  }, [newCommentPosted, commentDeleted]);

  useEffect(() => {
    getArticle(article_id).then((articleData) => {
      setVoteCount(articleData.votes);
    });
  }, [hasVoted]);

  useEffect(() => {
    localStorage.setItem(`article_${article_id}_voted`, hasVoted);
  }, [hasVoted, article_id]);

  const handleVote = () => {
    const incVotes = hasVoted ? -1 : 1;
    updateArticleVotes(article_id, incVotes).then((updatedArticle) => {
      setVoteCount(updatedArticle.votes);
      setHasVoted(!hasVoted);
    });
  };

  return (
    <div className="single-article__container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="single-article__title">{article?.title}</h1>

              <img
                src={article?.article_img_url}
                alt=""
                className="single-article__img"
              />
            </motion.div>
          </AnimatePresence>

          <div className="single-article__flex-container">
            <div className="single-article__author-info">
              <p className="single-article__author">{article?.author}</p>
              <p className="single-article__created-at">
                {article?.created_at.split("T")[0]}
              </p>
              <Link
                to={`/topics/${article?.topic}`}
                className="single-article__topic-link"
              >
                <p className="topic-link">{article?.topic}</p>
              </Link>
            </div>

            <p className="single-article__body">{article?.body}</p>

            <div className="single-article__stats">
              <p className="single-article__votes">
                Votes: <span className="single-article__stat">{voteCount}</span>{" "}
                <BsHandThumbsUpFill
                  className={`thumbsup-icon ${hasVoted ? "voted" : ""}`}
                  onClick={handleVote}
                  style={{
                    color: hasVoted ? "#00001a" : "#c5c6ce",
                  }}
                />
              </p>
              <p className="single-article__comment-count">
                Comments:{" "}
                <span className="single-article__stat">{commentCount}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
