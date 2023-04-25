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
