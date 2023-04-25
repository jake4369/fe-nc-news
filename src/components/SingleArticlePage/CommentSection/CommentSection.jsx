import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getUser } from "../../../utils/api";
import { useIsLoading } from "../../../context/IsLoadingContext";

import LoadingSpinner from "../../Shared/LoadingSpinner";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  const { article_id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [comments, setComments] = useState([]);
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id, currentPage, limit).then((response) => {
      setComments(response);

      const userData = response.map((comment) => {
        return getUser(comment.author);
      });

      Promise.all(userData).then((users) => {
        setComments((prevComments) => {
          return prevComments.map((comment, index) => {
            return { ...comment, avatar_url: users[index].avatar_url };
          });
        });
        setIsLoading(false);
      });
    });
  }, []);

  console.log(comments);

  const commentCards = comments.map((comment) => {
    return <CommentCard key={comment.comment_id} comment={comment} />;
  });

  return (
    <section className="comment-section">
      <h2 className="comment-section__heading">Comment Section</h2>

      <div className="comments-container">{commentCards}</div>
    </section>
  );
};

export default CommentSection;
