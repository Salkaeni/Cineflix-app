import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import SnackItem from './SnackItem';

const Home = ({ addToCart }) => {
  const [movies, setMovies] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    // Fetch movies and snacks from the JSON server
    const fetchData = async () => {
      try {
        const moviesResponse = await fetch('/api/movies');
        const snacksResponse = await fetch('/api/snacks');
        const moviesData = await moviesResponse.json();
        const snacksData = await snacksResponse.json();
        setMovies(moviesData);
        setSnacks(snacksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Available Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} addToCart={addToCart} />
        ))}
      </div>

      <h1>Available Snacks</h1>
      <div className="snack-list">
        {snacks.map(snack => (
          <SnackItem key={snack.id} snack={snack} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
