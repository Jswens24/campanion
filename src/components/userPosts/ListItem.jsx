import React from 'react';

const ListItem = (props) => {
    return (
        <div className='camp-entry-card'>
            <img src={props.entry.camp_entry_url} alt='camp photo' />
        </div>
    )
};

export default ListItem;