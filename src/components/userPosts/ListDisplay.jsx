import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ListItem from './ListItem';
import './ListDisplay.css';


const ListDisplay = () => {
    const [entries, setEntries] = useState([]);
    const [filterValue, setFilterValue] = useState('All');

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


    const handleFilter = (entries) => {
        if (filterValue === 'All') {
            return entries
        } else if (filterValue === 'fourByFourTrue') {
            return entries.camp_entry_four_wheel === true;
        } else if (filterValue === 'fourByFourFalse') {
            return entries.camp_entry_four_wheel === false;
        } else if (filterValue === 'dogFriendlyTrue') {
            return entries.camp_entry_dog_friendly === true;
        } else if (filterValue === 'dogFriendlyFalse') {
            return entries.camp_entry_dog_friendly === false;
        }
    }

    useEffect(() => {
        getList()
    }, [])


    return (
        <div className='list-display-container'>
            <div className='filter-div'>
                <p>Filter By: </p>
                <select onChange={e => setFilterValue(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='fourByFourTrue'>4x4 Required</option>
                    <option value='fourByFourFalse'>4x4 Not Required</option>
                    <option value='dogFriendlyTrue'>Dog Friendly</option>
                    <option value='dogFriendlyFalse'>Not Dog Friendly</option>
                </select>
            </div>
            <div className='list-display-flex'>
                {entries
                    .filter(handleFilter)

                    .map((entry, index) => {
                        return <ListItem entry={entry} />
                    })}
            </div>

        </div>
    )
}

export default ListDisplay;