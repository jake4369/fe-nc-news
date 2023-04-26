import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getUser, getArticle } from "../../../utils/api";

import CommentCard from "./CommentCard";

const CommentSection = () => {
  const { article_id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const commentsContainerRef = useRef(null);

  useEffect(() => {
    getArticle(article_id).then((articleData) => {
      setTotalComments(articleData.comment_count);
    });
  }, []);

  useEffect(() => {
    getComments(article_id, currentPage, limit).then((commentsData) => {
      setComments(commentsData.comments);

      const userData = commentsData.comments.map((comment) => {
        return getUser(comment.author);
      });

      Promise.all(userData).then((users) => {
        setComments((prevComments) => {
          return prevComments.map((comment, index) => {
            return { ...comment, avatar_url: users[index].avatar_url };
          });
        });
      });
    });
  }, [article_id, currentPage, limit]);

  const commentCards = comments.map((comment) => {
    return <CommentCard key={comment.comment_id} comment={comment} />;
  });

  const lastPage = Math.ceil(totalComments / limit);

  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
      commentsContainerRef.current.scrollIntoView();
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    commentsContainerRef.current.scrollIntoView();
  };

  return (
    <section className="comment-section">
      <h2
        className="comment-section__heading"
        ref={commentsContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        Comment Section
      </h2>

      <div className="comments-container">
        {commentCards}
        <div className="comments__pagination-container">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="comments__pagination-btn"
          >
            Prev Page
          </button>

          <p className="comments__pagination-pages">
            Page {currentPage} of {lastPage}
          </p>

          <button
            onClick={nextPage}
            disabled={currentPage === lastPage}
            className="comments__pagination-btn"
          >
            Next Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
