import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditEntryBtn = (props) => {

    const navigate = useNavigate();

    const editEntryHandler = () => {
        console.log(props.entryObj)

        navigate(`/editForm/${props.entryObj.camp_entry_id}`)

    }


    return (
        <button
            onClick={editEntryHandler}
            className="delete-edit-btn">
            Edit
        </button>
    )
};


export default EditEntryBtn;