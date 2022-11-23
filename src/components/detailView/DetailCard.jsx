import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import './DetailCard.css';
import EditEntryBtn from './EditEntryBtn';

const DetailCard = (props) => {
    const [loading, setLoading] = useState(false)

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
                    <h1>{props.entryObj.camp_entry_title}</h1>
                    <div className='small-details-div'>
                        <p>4x4 Needed: {props.entryObj.camp_entry_four_wheel
                            ? 'Yes' : 'No'}</p>
                        <p>Dog Friendly: {props.entryObj.camp_entry_dog_friendly
                            ? 'Yes' : 'No'}</p>
                        <p>Coordinates: {props.entryObj.camp_entry_coordinates}</p>
                        <p>Month Visited: {props.entryObj.camp_entry_month}</p>
                    </div>
                    <div className='details-comments'>
                        <h4>{props.entryObj.camp_entry_comments}</h4>
                    </div>
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