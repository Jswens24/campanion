import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ListItem from './ListItem';
import './ListDisplay.css';


const ListDisplay = () => {
    const [entries, setEntries] = useState([])

    const currentId = localStorage.getItem('user_id');

    const getList = () => {
        axios
            .get('http://localhost:4004/api/getCampEntries', { params: { currentId } })
            .then((res) => {
                // console.log(res.data)
                let newArr = res.data.map((entry, index) => {
                    return entry;
                })
                setEntries(newArr);
                console.log(newArr)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getList()
    }, [])


    return (
        <div className='list-display-flex'>
            {entries.map((entry, index) => {
                return <ListItem entry={entry} />
            })}

        </div>
    )
}

export default ListDisplay;