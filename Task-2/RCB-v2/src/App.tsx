"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";
import Matches from "./pages/Matches";
import News from "./pages/News";
import FanZone from "./pages/FanZone";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="rcb-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/players" element={<Players />} />
              <Route path="/players/:id" element={<PlayerDetail />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/news" element={<News />} />
              <Route path="/fan-zone" element={<FanZone />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
