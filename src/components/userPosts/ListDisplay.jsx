import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import ListItem from './ListItem';
import './ListDisplay.css';


const ListDisplay = () => {
    const [entries, setEntries] = useState([]);
    const [filterValue, setFilterValue] = useState('All');

    const allRef = useRef();
    const fourByFourTrueRef = useRef();
    const fourByFourFalseRef = useRef();
    const dogFriendlyTrueRef = useRef();
    const dogFriendlyFalseRef = useRef();

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

    const clickFilterHandler = () => {
        setFilterValue(

        )
    }

    const handleFilter = (entries) => {
        if (filterValue === 'All') {
            return entries
        } else if (filterValue === 'fourByFourTrue') {
            return entries.camp_entry_four_wheel === true;
        }
    }

    useEffect(() => {
        getList()
    }, [])


    return (
        <div className='list-display-container'>
            <div className='filter-div'>
                <p>Filter By: </p>
                <select>
                    <option ref={allRef} value='All'>All</option>
                    <option ref={fourByFourTrueRef} value='fourByFourTrue'>4x4 Required</option>
                    <option ref={fourByFourFalseRef} value='fourByFourFalse'>4x4 Not Required</option>
                    <option ref={dogFriendlyTrueRef} value='dogFriendlyTrue'>Dog Friendly</option>
                    <option ref={dogFriendlyFalseRef} value='dogFriendlyFalse'>Not Dog Friendly</option>
                </select>
                <button onClick={clickFilterHandler} className='filter-btn' type='submit'>Apply</button>
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