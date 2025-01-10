import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css'; // Import the CSS file

const SimpleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <Form inline onSubmit={handleSearch} className="search-bar-form">
        <FormControl
          type="text"
          placeholder="Enter text here"
          className="mr-sm-2 search-bar-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" variant="outline-success" className="search-bar-button">Search</Button>
      </Form>
    </div>
  );
};

export default SimpleSearch;
