import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from 'react'

const HomePage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {
            title: "Inception",
            release_date: "2010",
            url: "https://example.com/inception.jpg"
        },
        {
            title: "The Dark Knight",
            release_date: "2008",
            url: "https://example.com/dark_knight.jpg"
        },
        {
            title: "Interstellar",
            release_date: "2014",
            url: "https://example.com/interstellar.jpg"
        },
        {
            title: "The Matrix",
            release_date: "1999",
            url: "https://example.com/matrix.jpg"
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
    }
    return (
        <div className = "home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </div>
        </div>
    );
};


export default HomePage;