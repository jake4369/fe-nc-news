import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
