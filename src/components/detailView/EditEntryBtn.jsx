import React from 'react';

const EditEntryBtn = (props) => {

    const editEntryHandler = () => {
        // axios
        //     .put('http://localhost:4004/api/editEntry/', )
        console.log(props.entryObj)

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