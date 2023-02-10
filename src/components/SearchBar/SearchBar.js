import React, { useRef } from 'react';

import classes from './SearchBar.module.css';

const SearchBar = ({ getWeatherInfo }) => {
  const inputRef = useRef();

  const onInputHandler = () => {
    getWeatherInfo(inputRef.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onInputHandler();
    }
  };

  return (
    <div className={classes.searchBar}>
      <label htmlFor="location" className={classes.label}>
        Set Location
      </label>
      <input
        className={classes.input}
        type="text"
        id="location"
        placeholder="Enter a city"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onInputHandler} className={classes.btn}>
        City
      </button>
    </div>
  );
};

export default SearchBar;
