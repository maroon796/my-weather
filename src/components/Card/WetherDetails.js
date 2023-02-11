import React from 'react';
import classes from './WeatherDetails.module.css';

const WeatherDetails = ({ temperature, description, date, activate }) => {
  return (
    <div className={classes.weatherContainer}>
      {activate && (
        <div>
          <div>
            <p style={{ fontSize: '40px', margin: '0' }}>{temperature}&#176;</p>
          </div>
          <p>{description}</p>
          <p
            style={{
              marginBottom: '2rem',
            }}>{`${date.dayOfWeek}, ${date.month} ${date.dayOfMonth}`}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
