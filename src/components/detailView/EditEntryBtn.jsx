import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditEntryBtn = (props) => {

    const navigate = useNavigate();

    const editEntryHandler = () => {
        // axios
        //     .put('http://localhost:4004/api/editEntry/', )
        console.log(props.entryObj)

        navigate(`/editForm/${props.entryObj.camp_entry_id}`)

    }


    return (
        <button
            onClick={editEntryHandler}
            className="logout-btn">
            Edit
        </button>
    )
};


export default EditEntryBtn;