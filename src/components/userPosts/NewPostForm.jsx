import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPostForm.css'

const NewPostForm = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };


    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </nav>
            <form className='form-new-camp'>
                <div className="form-div-new-post">
                    <label> Title:
                        <br />
                        <input
                            type='text'
                            placeholder='enter title'
                        />
                    </label>
                    <label> Picture URL:
                        <br />
                        <input
                            type='text'
                            placeholder='enter picture url'
                        />
                    </label>
                    <label> Coordinates:
                        <br />
                        <input
                            type='text'
                            placeholder='enter coordinates'
                        />
                    </label>
                    <p className='p-in-form'>Select all the apply:</p>
                    <div className="select-options">
                        <label> 4x4 Needed:
                            <input
                                className='my-checkbox'
                                type='checkbox'
                                id='4x4'
                                name='4x4'
                                value='4x4' />
                        </label>
                        <label> Dog Friendly:
                            <input
                                className='my-checkbox'
                                type='checkbox'
                                id='dogFriendly'
                                name='dogFriendly'
                                value='dogFriendly' />
                        </label>
                        <label>Month Camped:
                            <select name='month' id='month-select'>
                                <option value='january'>January</option>
                                <option value='february'>February</option>
                                <option value='march'>March</option>
                                <option value='april'>April</option>
                                <option value='may'>May</option>
                                <option value='june'>June</option>
                                <option value='july'>July</option>
                                <option value='august'>August</option>
                                <option value='september'>September</option>
                                <option value='october'>October</option>
                                <option value='november'>November</option>
                                <option value='december'>December</option>
                            </select>
                        </label>
                    </div>
                    <label>Comments:
                        <br />
                        <textarea id='comments' name='comments' rows='5' cols='45' >
                        </textarea>
                    </label>
                    <button className='main-btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default NewPostForm;