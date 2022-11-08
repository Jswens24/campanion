import React from 'react';
import './DetailCard.css';

const DetailCard = (props) => {


    return (
        <div>
            <img className='detail-img' src={props.entryObj.camp_entry_url} alt='campsite' />
            <h1>{props.entryObj.camp_entry_title}</h1>
            <div>
                <p>4x4 Needed: {props.entryObj.camp_entry_four_wheel
                    ? 'Yes' : 'No'}</p>
                <p>Dog Friendly: {props.entryObj.camp_entry_dog_friendly
                    ? 'Yes' : 'No'}</p>
            </div>
        </div>
    )
};

export default DetailCard;