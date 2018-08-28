import React from 'react';
import './search.css';

// this kind of use arroy functions 
// doent need return statement
const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Search your video"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
