import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = (props) => {


    return (

        <Link className='link' to={`/detailView/${props.entry.camp_entry_id}`}>
            <div className='camp-entry-card' key={props.entry.camp_entry_id}>
                <h4 className='camp-title-list'>{props.entry.camp_entry_title}</h4>
                <img className='camp-img-list' src={props.entry.camp_entry_url} alt='camp site' />
            </div>
        </Link>
    )
};

export default ListItem;