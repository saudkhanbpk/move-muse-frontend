import React, { useState } from 'react';
import { Form, Button, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import './SearchBar.css'; 


const PastEventsSearch = () => {
  const [style, setStyle] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [date, setDate] = useState('');
  const [containsText, setContainsText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here, like sending a request to your backend
  };

  return (
    <Form inline onSubmit={handleSearch}>
      <InputGroup>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Style"
          id="input-group-dropdown-style"
        >
          {/* Add your actual style options here */}
        </DropdownButton>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Location"
          id="input-group-dropdown-location"
        >
          {/* Add your actual location options here */}
        </DropdownButton>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Rating"
          id="input-group-dropdown-rating"
        >
          {/* Add your actual rating options here */}
        </DropdownButton>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Date"
          id="input-group-dropdown-date"
        >
          {/* Add your actual date options here */}
        </DropdownButton>
        <FormControl
          aria-describedby="basic-addon1"
          placeholder="Contains text"
          value={containsText}
          onChange={(e) => setContainsText(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default PastEventsSearch;
