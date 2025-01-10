import React, { useState } from 'react';
import { Form, Button, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import './SearchBar.css'; 


const FutureEventsSearch = () => {
  const [style, setStyle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [containsText, setContainsText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
   
    console.log({ style, location, date, containsText });
  };

  return (
    <Form inline onSubmit={handleSearch}>
      <InputGroup>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Style"
          id="input-group-dropdown-1"
        >
          {/* Replace these with your actual style options */}
          <Dropdown.Item href="#" onClick={() => setStyle('Style 1')}>Style 1</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setStyle('Style 2')}>Style 2</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Location"
          id="input-group-dropdown-2"
        >
          {/* Replace these with your actual location options */}
          <Dropdown.Item href="#" onClick={() => setLocation('Location 1')}>Location 1</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setLocation('Location 2')}>Location 2</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Date"
          id="input-group-dropdown-3"
        >
          {/* Replace these with your actual date options */}
          <Dropdown.Item href="#" onClick={() => setDate('Date 1')}>Date 1</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setDate('Date 2')}>Date 2</Dropdown.Item>
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

export default FutureEventsSearch;
