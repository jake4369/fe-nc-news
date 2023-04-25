import MainArticle from "./../components/Homepage/MainArticle";
import TopThreeArticles from "./../components/Shared/TopThreeArticles";
import NewArticles from "./../components/Shared/NewArticles";

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="flex-container">
        <MainArticle />
        <NewArticles />
      </div>

      <TopThreeArticles />
    </main>
  );
};

export default Homepage;
