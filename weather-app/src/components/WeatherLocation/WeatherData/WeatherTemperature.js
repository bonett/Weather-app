import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes, { number } from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weather';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcons = ( weatherState ) => {
    
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon) {
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    } else {
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div className="weather_temperature_content">
            {
                getWeatherIcons(weatherState)
            }
            <span className="temperature">{`${temperature}`} </span>
            <span className="temperature_type">{` Cº`}</span>
        </div>
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;