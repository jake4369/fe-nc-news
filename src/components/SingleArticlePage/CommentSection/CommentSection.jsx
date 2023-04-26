import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getUser, getArticle } from "../../../utils/api";

import CommentCard from "./CommentCard";
import Pagination from "../../Shared/Pagination";

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

  // const lastPage = Math.ceil(totalComments / limit);

  // const nextPage = (componentRef) => {
  //   if (currentPage < lastPage) {
  //     setCurrentPage((prev) => prev + 1);
  //     componentRef.current.scrollIntoView();
  //   }
  // };

  // const prevPage = (componentRef) => {
  //   setCurrentPage((prev) => prev - 1);
  //   componentRef.current.scrollIntoView();
  // };

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
        <Pagination
          currentPage={currentPage}
          totalComments={totalComments}
          limit={limit}
          componentRef={commentsContainerRef}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default CommentSection;
