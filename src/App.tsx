import { Routes, Route, useLocation } from "react-router-dom";

import { SiteLayout } from "./components/layout/SiteLayout";
import { BoardPage } from "./pages/BoardPage";
import { HomePage } from "./pages/HomePage";
import { ShowcasePage } from "./pages/ShowcasePage";

function App() {
  const location = useLocation();

  return (
    <SiteLayout>
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/diretoria" element={<BoardPage />} />
          <Route path="/vitrine" element={<ShowcasePage />} />
        </Routes>
      </div>
    </SiteLayout>
  );
}

export default App;
