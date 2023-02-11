import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import classes from './App.module.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [activateWeather, setActivateWeather] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherInfo = (cityName) => {
    setError(false);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ba10861a04d82b33b3fefc64fe028d49`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const weekday = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];

        const date = new Date();
        const dayOfWeek = weekday[date.getDay()];

        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];

        const currentMonth = monthNames[date.getMonth()];

        const dayOfMonth = date.getDate();

        setWeatherInfo({
          description: data.weather[0].main,
          temperature: Math.round(data.main.temp - 273),
          date: {
            dayOfWeek: dayOfWeek,
            month: currentMonth,
            dayOfMonth: dayOfMonth,
          },
        });
        setActivateWeather(true);
      })
      .catch((err) => {
        setError(true);
      });
  };

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
