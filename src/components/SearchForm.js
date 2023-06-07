import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
