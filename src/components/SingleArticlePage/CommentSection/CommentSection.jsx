import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { getComments, getUser, getArticle } from "../../../utils/api";
import { Link } from "react-router-dom";

import CommentCard from "./CommentCard";
import Pagination from "../../Shared/Pagination";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  const { article_id } = useParams();
  const { loggedInUser } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [newCommentPosted, setNewCommentPosted] = useState(false);
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
  }, [article_id, currentPage, limit, newCommentPosted]);

  const commentCards = comments.map((comment) => {
    return <CommentCard key={comment.comment_id} comment={comment} />;
  });

  return (
    <section
      className="comment-section"
      ref={commentsContainerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      <h2 className="comment-section__heading">Comment Section</h2>

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

      {loggedInUser !== null ? (
        <CommentForm
          setNewCommentPosted={setNewCommentPosted}
          commentsContainerRef={commentsContainerRef}
        />
      ) : (
        <p>
          <Link to="/login" style={{ color: "#f15d51" }}>
            Log in
          </Link>{" "}
          to leave a comment
        </p>
      )}
    </section>
  );
};

export default CommentSection;
