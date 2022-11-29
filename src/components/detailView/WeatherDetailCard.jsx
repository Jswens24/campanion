import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;


const WeatherDetailCard = (props) => {
    const [temp, setTemp] = useState('');
    const [nearestCity, setNearestCity] = useState('');
    const [weatherCondition, setWeatherCondition] = useState('');
    const [weatherImg, setWeatherImg] = useState('');

    const getWeather = async () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?lat=${props.lat}&lon=${props.lon}&key=${API_KEY}&units=I`)
            .then((response) => {
                console.log(response.data.data[0])
                // console.log(`temp is: ${response.data.data[0].temp}`)
                setTemp(response.data.data[0].temp);
                setNearestCity(response.data.data[0].city_name);
                setWeatherCondition(response.data.data[0].weather.description);
                setWeatherImg(response.data.data[0].weather.icon)
                console.log(weatherImg)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div>
            <p>Weather in {nearestCity}</p>
            <img src={`https://www.weatherbit.io/static/img/icons/${weatherImg}.png`} placeholder='weather status' />
            <img src={`https://www.weatherbit.io/static/img/icons/${weatherImg}.png`} placeholder='weather status' />
            <p>Current temperature is {temp}</p>
            <p>Weather Condition: {weatherCondition}</p>
        </div>
    )
};

export default WeatherDetailCard;