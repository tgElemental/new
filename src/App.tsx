import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import GamePage from "./pages/GamePage";
import HelpPage from "./pages/HelpPage";
import InvitePage from "./pages/InvitePage";
import RankingPage from "./pages/RankingPage";
import ElementsPage from "./pages/ElementsPage";
import WebApp from "@twa-dev/sdk";
function App() {
  WebApp.ready();
  WebApp.expand();
  WebApp.setBackgroundColor("#C3B091");
  WebApp.setHeaderColor("#0e87cc");
  WebApp.enableClosingConfirmation;
  WebApp.BackButton.show();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/invite" element={<InvitePage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/elements" element={<ElementsPage />} />
    </Routes>
  );
}

export default App;
