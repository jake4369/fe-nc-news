import { useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../../utils/api";

import { useUser } from "../../../context/UserContext";

const CommentForm = ({
  setNewCommentPosted,
  commentsContainerRef,
  setCurrentPage,
}) => {
  const { loggedInUser } = useUser();
  const { article_id } = useParams();
  const [commentBody, setCommentBody] = useState("");

  const handleChange = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = (e) => {
    setNewCommentPosted(false);
    e.preventDefault();

    if (loggedInUser !== null) {
      if (commentBody !== "") {
        addComment(article_id, loggedInUser.username, commentBody).then(() => {
          setNewCommentPosted(true);
          setCommentBody("");
          commentsContainerRef.current.scrollIntoView();
          setCurrentPage(1);
        });
      } else {
        alert("Comment must not be empty");

        return;
      }
    } else {
      alert("Please log in to add a comment");
      setCommentBody("");
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="comment-form__input"
        value={commentBody}
        onChange={handleChange}
        placeholder="Leave a comment..."
      />

      <button className="comment-form__submit-btn">Send</button>
    </form>
  );
};

export default CommentForm;
