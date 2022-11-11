import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteBtn = (props) => {
    const campId = props.entryObj.camp_entry_id;
    const currentId = localStorage.getItem('user_id');

    const navigate = useNavigate();

    const deleteEntryHandler = () => {
        axios
            .delete(`http://localhost:4004/api/deleteEntry/${campId}`)
            .then((res) => {
                console.log(res.data);
                alert('You have successfully deleted an entry');
                navigate(`/userHomePage/${currentId}`);
            })
            .catch(err => console.log(err))


    }


    return (
        <button
            onClick={deleteEntryHandler}
            className="logout-btn">
            Delete
        </button>
    )
};

export default DeleteBtn;