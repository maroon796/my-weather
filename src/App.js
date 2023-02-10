import { useState } from 'react';
import Header from './components/Header/Header';
import classes from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [activateWeather, setActivateWeather] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherInfo = () => {};
  return (
    <>
      <Header />
      <main className={classes.main}>
        <SearchBar getWeatherInfo={getWeatherInfo} />

        <Card weather={weatherInfo} activate={activateWeather} isError={error} />
      </main>
    </>
  );
}

export default App;
