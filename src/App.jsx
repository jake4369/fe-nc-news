import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage";
import AllArticlesPage from "./pages/AllArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import TopicPage from "./pages/TopicPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<AllArticlesPage />} />
          <Route path="/articles/:article_id" element={<SingleArticlePage />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
