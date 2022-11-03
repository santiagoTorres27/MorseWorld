import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HistoryPage from "./pages/HistoryPage";
import LettersPage from "./pages/LettersPage";
import styled, { createGlobalStyle } from "styled-components";
import PracticePage from "./pages/PracticePage";
import LandingPage from "./pages/LandingPage";
import TranslatorPage from "./pages/TranslatorPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/letters" element={<LettersPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/translator" element={<TranslatorPage />} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
