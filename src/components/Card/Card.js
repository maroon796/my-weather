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

const currentWeather = {
  Clear: <Clear />,
  Clouds: <Clouds />,
  Rain: <Rain />,
  'Cloud-Wind': <CloudWind />,
  Drizzle: <Drizzle />,
  Snow: <Snow />,
  Thunderstorm: <Thunderstorm />,
};

const Card = () => {
  return <div>Card</div>;
};

export default Card;
