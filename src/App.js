import { useState } from 'react';
import Header from './components/Header/Header';
import classes from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const getWeatherInfo = () => {};
  return (
    <>
      <Header />
      <main className={classes.main}>
        <SearchBar getWeatherInfo={getWeatherInfo} />
      </main>
    </>
  );
}

export default App;
