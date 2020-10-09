import React from "react";
import "./SearchBar.css";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h3>WE GROW BY HELPING IN NEED</h3>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="primary">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
