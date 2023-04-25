const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <div className="comment-author__info">
        <img
          src={comment.avatar_url}
          alt=""
          className="comment-card__avatar-img"
        />

        <p className="comment-card__author">{comment.author}</p>
      </div>

      <p className="comment-card__body">{comment.body}</p>

      <p className="comment-card__created-at">
        {comment.created_at.split("T")[0]}
      </p>

      <p className="comment-card__votes">
        Votes: <span className="comment-card__stat">{comment.votes}</span>
      </p>
    </div>
  );
};

export default CommentCard;
