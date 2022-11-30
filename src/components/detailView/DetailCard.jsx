import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import './DetailCard.css';
import EditEntryBtn from './EditEntryBtn';
import WeatherDetailCard from './WeatherDetailCard';
import convert from 'geo-coordinates-parser'
import MapComponent from './MapComponent';

const DetailCard = (props) => {
    const [loading, setLoading] = useState(false);



    let converted;


    if (props.entryObj.camp_entry_coordinates) {
        let coordinates = props.entryObj.camp_entry_coordinates;
        try {
            converted = convert(coordinates);
        }
        catch (error) {
            console.log(error);
        }
    }


    // console.log({ props })
    // console.log(converted)



    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);



    return (
        <div className='detail-card-div'>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className='deets-contain'>
                    <img className='detail-img' src={props.entryObj.camp_entry_url} alt='campsite' />
                    <div className='details-comments'>
                        <div className="title-and-info">
                            <h1>{props.entryObj.camp_entry_title}</h1>
                            <div className='small-details-div'>
                                <p>4x4 Needed: {props.entryObj.camp_entry_four_wheel
                                    ? 'Yes' : 'No'}</p>
                                <p>Dog Friendly: {props.entryObj.camp_entry_dog_friendly
                                    ? 'Yes' : 'No'}</p>
                                <p>Coordinates: {props.entryObj.camp_entry_coordinates}</p>
                                <p>Month Visited: {props.entryObj.camp_entry_month}</p>
                            </div>
                            <hr />
                            <h4>{props.entryObj.camp_entry_comments}</h4>
                        </div>
                    </div>
                    {converted && (
                        <>
                            <WeatherDetailCard lat={converted.decimalLatitude} lon={converted.decimalLongitude} />
                            <MapComponent lat={converted.decimalLatitude} lon={converted.decimalLongitude} />
                        </>
                    )}

                    <div>
                        <EditEntryBtn entryObj={props.entryObj} />
                        <DeleteBtn entryObj={props.entryObj} />
                    </div>
                </div>
            )}


        </div>
    )
};

export default DetailCard;