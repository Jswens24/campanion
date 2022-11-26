import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;



const WeatherDetailCard = (props) => {

    const getWeather = async () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?lat=${props.lat}&lon=${props.lon}&key=${API_KEY}&units=I`)
            .then((response) => {
                console.log(response.data.data[0])
                console.log(`temp is: ${response.data.data[0].app_temp}`)
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
            <p>Lon: {props.lon}</p>
        </div>
    )
};

export default WeatherDetailCard;