import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-api-aqzx.onrender.com/api",
});

export const getAllArticles = () => {
  return newsAPI
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => console.error(error));
};
