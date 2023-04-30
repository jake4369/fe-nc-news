import { deleteComment } from "../../../utils/api";
import { motion, AnimatePresence } from "framer-motion";

import { useUser } from "../../../context/UserContext";
import { FaTrash } from "react-icons/fa";

const CommentCard = ({ comment, setCommentDeleted, setCurrentPage }) => {
  const { loggedInUser } = useUser();

  const handleDelete = (comment_id) => {
    setCommentDeleted(false);
    deleteComment(comment_id).then(() => {
      setCommentDeleted(true);
      setCurrentPage(1);
    });
  };

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="comment-card">
          <div className="comment-author__info">
            <img
              src={comment.avatar_url}
              alt=""
              className="comment-card__avatar-img"
            />

            <p className="comment-card__author">{comment.author}</p>

            {loggedInUser !== null &&
              loggedInUser.username === comment.author && (
                <FaTrash
                  className="trash-icon"
                  onClick={() => handleDelete(comment.comment_id)}
                />
              )}
          </div>

          <p className="comment-card__body">{comment.body}</p>

          <p className="comment-card__created-at">
            {comment.created_at.split("T")[0]}
          </p>

          <p className="comment-card__votes">
            Votes: <span className="comment-card__stat">{comment.votes}</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommentCard;
