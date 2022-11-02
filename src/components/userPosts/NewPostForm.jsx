import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <form>
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
                <p>Select all the apply:</p>
                <label> 4x4 Needed:
                    <input
                        type='checkbox'
                        id='4x4'
                        name='4x4'
                        value='4x4' />
                </label>
                <label> Dog Friendly:
                    <input
                        type='checkbox'
                        id='dogFriendly'
                        name='dogFriendly'
                        value='dogFriendly' />
                </label>
                <label>Month Camped:
                    <select name='month' id='month-select'>
                        <option value=''>Please select a month</option>
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
            </form>
        </div>
    )
};

export default NewPostForm;