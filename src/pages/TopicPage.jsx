import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIsLoading } from "../context/IsLoadingContext";
import { getAllArticles } from "../utils/api";

import codingHeroImg from "../assets/images/coding-hero.jpeg";
import cookingHeroImg from "../assets/images/cooking-hero.jpeg";
import footballHeroImg from "../assets/images/football-hero.jpeg";

import NewArticles from "../components/Shared/NewArticles";
import ArticleCard from "../components/Shared/ArticleCard";
import TopThreeArticles from "../components/Shared/TopThreeArticles";

const TopicPage = () => {
  const { topic } = useParams();
  const [topicArticles, setTopicArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesData) => {
      const filtedArticles = articlesData.filter(
        (article) => article.topic === topic
      );

      setTopicArticles(filtedArticles);
    });
  }, []);

  console.log(topicArticles);

  const heroImg = eval(`${topic}HeroImg`);

  const articleCards = topicArticles.map((article) => {
    return <ArticleCard key={article.article_id} article={article} />;
  });

  return (
    <div className="topic-page">
      <div className="flex-container">
        <div className="articles-column">
          <h1 className="topic-page__heading">{topic}</h1>

          <img src={heroImg} alt="" className="topic-page__hero-img" />

          <section className="all-article-section">{articleCards}</section>
        </div>

        <NewArticles />
      </div>

      <TopThreeArticles />
    </div>
  );
};

export default TopicPage;
