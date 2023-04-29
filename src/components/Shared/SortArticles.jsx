import { useState } from "react";

const SortArticles = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortChange = (e) => {
    const value = e.target.value;
    const [newSortBy, newSortOrder] = value.split(".");

    setSortBy(newSortBy);
    setSortOrder(newSortOrder);

    handleSort(newSortBy, newSortOrder);
  };

  return (
    <form className="article-sort-form">
      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        value={`${sortBy}.${sortOrder}`}
        onChange={handleSortChange}
      >
        <option value="created_at.desc">Created At (Newest First)</option>
        <option value="created_at.asc">Created At (Oldest First)</option>
        <option value="comment_count.desc">Comment Count (Most First)</option>
        <option value="comment_count.asc">Comment Count (Least First)</option>
        <option value="votes.desc">Votes (Most First)</option>
        <option value="votes.asc">Votes (Least First)</option>
      </select>
    </form>
  );
};

export default SortArticles;
