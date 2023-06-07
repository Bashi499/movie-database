import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import MovieCard from './components/MovieCard';
import SearchForm from './components/SearchForm';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            query: query,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom>
        Movie Database
      </Typography>
      <SearchForm onSearch={searchMovies} />
      <div>
        {loading ? (
          <Typography variant="body1">Loading...</Typography>
        ) : error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </Container>
  );
}

export default App;
