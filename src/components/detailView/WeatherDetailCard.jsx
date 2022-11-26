import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;



const WeatherDetailCard = (props) => {

    const getWeather = async () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?lat=${props.lat}&lon=${props.lon}&key=${API_KEY}&units=I&count=5`)
            .then((response) => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div>
            <p>Weather Card</p>
            <p>Lat: {props.lat}</p>
            <p>Lat: {props.lon}</p>
        </div>
    )
};

export default WeatherDetailCard;