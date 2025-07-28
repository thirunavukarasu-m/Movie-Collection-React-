import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (!favorites) {
    return (
      <div className="favorites-empty">
        <h2>No Favorites yet.</h2>
        <p>Start adding some movies to your favorites list!</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="favorites">
          <h2>Your Favorites</h2>
        </div>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </>
    );
  }
};

export default Favorites;
