import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Modal, Box } from '@mui/material';

function MovieCard({ movie }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="400"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{ width: '100%' }}
        />
        <CardContent sx={{ width: '100%' }}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Released: {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Rating: {movie.vote_average}
          </Typography>
        </CardContent>
      </Card>

      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
            {movie.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
            Overview: {movie.overview}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default MovieCard;
