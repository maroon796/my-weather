import WeatherDetails from './WeatherDetails';
import classes from './Card.module.css';
import { PreviewIcon } from '../../assets/icons/PreviewIcon';
import { Clear } from '../../assets/icons/Clear';
import { CloudWind } from '../../assets/icons/CloudWind';
import { Clouds } from '../../assets/icons/Clouds';
import { Snow } from '../../assets/icons/Snow';
import { Rain } from '../../assets/icons/Rain';
import { Drizzle } from '../../assets/icons/Drizzle';
import { Thunderstorm } from '../../assets/icons/Thunderstorm';
import { Mist } from '../../assets/icons/Mist';

const currentWeather = {
  Clear: <Clear />,
  Clouds: <Clouds />,
  Rain: <Rain />,
  'Cloud-Wind': <CloudWind />,
  Drizzle: <Drizzle />,
  Snow: <Snow />,
  Thunderstorm: <Thunderstorm />,
  Mist: <Mist />,
};

const Card = ({ weather, activate, isError }) => {
  return (
    <div className={classes.card}>
      {!activate ? (
        <PreviewIcon style={{ width: '200px' }} />
      ) : (
        <>
          {!isError && currentWeather[weather.description]}

          {!isError && (
            <WeatherDetails
              temperature={weather.temperature}
              description={weather.description}
              date={weather.date}
              activate={activate}
            />
          )}
        </>
      )}
      {isError && <p style={{ color: 'red' }}>Enter a correct location please</p>}
    </div>
  );
};

export default Card;
