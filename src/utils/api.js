import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-api-aqzx.onrender.com/api",
});

// ARTICLES
export const getAllArticles = () => {
  return newsAPI
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => console.error(error));
};

export const getArticle = (article_id) => {
  return newsAPI
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => console.error(error));
};

// COMMENTS
export const getComments = (article_id, page = 1, limit = 5) => {
  return newsAPI
    .get(`/articles/${article_id}/comments?page=${page}&limit=${limit}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.error(error));
};

export const addComment = (article_id, username, body) => {
  return newsAPI
    .post(`/articles/${article_id}/comments`, {
      article_id,
      username,
      body,
    })
    .then(({ data }) => {
      return data.comment;
    })
    .catch((error) => console.error(error));
};

export const deleteComment = (comment_id) => {
  return newsAPI
    .delete(`/comments/${comment_id}`)
    .catch((error) => console.error(error));
};

// USERS
export const getAllUsers = () => {
  return newsAPI
    .get("/users")
    .then(({ data }) => {
      return data.users;
    })
    .catch((error) => console.error(error));
};

// Get user by username
export const getUser = (username) => {
  return newsAPI.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
