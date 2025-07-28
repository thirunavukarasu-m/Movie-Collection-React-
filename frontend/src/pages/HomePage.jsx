import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'
const HomePage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    // const movies = [
    //     {
    //         title: "Inception",
    //         release_date: "2010",
    //         url: "https://example.com/inception.jpg"
    //     },
    //     {
    //         title: "The Dark Knight",
    //         release_date: "2008",
    //         url: "https://example.com/dark_knight.jpg"
    //     },
    //     {
    //         title: "Interstellar",
    //         release_date: "2014",
    //         url: "https://example.com/interstellar.jpg"
    //     },
    //     {
    //         title: "The Matrix",
    //         release_date: "1999",
    //         url: "https://example.com/matrix.jpg"
    //     }
    // ];
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);

            }
            catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies. Please try again later.");
            }
            finally {
                setLoading(false);
            }
        }
        fetchPopularMovies();
    }, [])
    
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