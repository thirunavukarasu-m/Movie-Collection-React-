import { useState } from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
