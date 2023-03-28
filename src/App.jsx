import { Route, Routes } from "react-router-dom";
import AllGames from "./components/AllGames";
import FreeGames from "./components/FreeGames";
import Navegador from "./components/Navegador";
import BrowserGames from "./components/BrowserGames";
import GameDetails from "./components/GameDetails";
import AdvancedBrowser from "./components/AdvancedBrowser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navegador></Navegador>
      <Routes>
        <Route path="/" element={<AllGames />} />
        <Route path="/games/:categoria" element={<FreeGames />} />
        <Route path="/browser/:categoria" element={<BrowserGames />} />
        <Route path="/game-details/:title/:id" element={<GameDetails />} />
        <Route path="/search/" element={<AdvancedBrowser />} />
      </Routes>
    </div>
  );
}

export default App;
