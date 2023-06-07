import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Released: {movie.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
