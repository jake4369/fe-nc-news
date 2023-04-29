import { useState, useEffect } from "react";
import { useIsLoading } from "../context/IsLoadingContext";

import SingleArticle from "../components/SingleArticlePage/SingleArticle";
import NewArticles from "../components/Shared/NewArticles";
import TopThreeArticles from "../components/Shared/TopThreeArticles";
import CommentSection from "../components/SingleArticlePage/CommentSection/CommentSection";

const SingleArticlePage = () => {
  const { isLoading, setIsLoading } = useIsLoading();
  const [newCommentPosted, setNewCommentPosted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);

  return (
    <div className="single-article-page">
      <div
        className="flex-container"
        style={{ marginBottom: isLoading ? "4rem" : "0" }}
      >
        <section className="articles-column">
          <SingleArticle
            newCommentPosted={newCommentPosted}
            commentDeleted={commentDeleted}
          />

          <CommentSection
            newCommentPosted={newCommentPosted}
            setNewCommentPosted={setNewCommentPosted}
            commentDeleted={commentDeleted}
            setCommentDeleted={setCommentDeleted}
          />
        </section>

        <NewArticles />
      </div>

      <TopThreeArticles />
    </div>
  );
};

export default SingleArticlePage;
