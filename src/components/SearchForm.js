import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
      <TextField
  label="Search movies..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  variant="outlined"
  size="medium"
  InputProps={{
    style: {
      fontFamily: 'Comic Sans MS',
      fontSize: '1.2rem',
    },
  }}
/>

        <Button type="submit" variant="contained" color="primary" sx={{ marginLeft: '8px' }}>
          Search
        </Button>
      </form>
    </Box>
  );
}

export default SearchForm;
