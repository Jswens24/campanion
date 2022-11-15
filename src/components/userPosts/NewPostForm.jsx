import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPostForm.css'

const NewPostForm = () => {
    const [title, setTitle] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [fourByFour, setFourByFour] = useState(false);
    const [dogFriendly, setDogFriendly] = useState(false);
    const [month, setMonth] = useState('');
    const [comments, setComments] = useState('');
    const [campType, setCampType] = useState('');


    const currentId = localStorage.getItem('user_id');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handlePostSubmit = (e) => {
        e.preventDefault()
        console.log({ title, pictureUrl, coordinates, fourByFour, dogFriendly, month, comments, campType })
        if (title.length === 0 || pictureUrl.length === 0 || coordinates.length === 0 || comments.length === 0) {
            alert('PLEASE FILL OUT ALL FIELDS')
        } else {
            axios
                .post('http://localhost:4004/api/newPost', { title, pictureUrl, coordinates, fourByFour, dogFriendly, month, comments, campType, currentId })
                .then((res) => {
                    console.log('sent to database')
                    console.log(res.data)
                    {
                        navigate(`/userHomePage/${currentId}`)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    const handleHomeBtn = () => {
        navigate(`/userHomePage/${currentId}`)
    };


    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                <button onClick={handleHomeBtn} className='logout-btn'>Home</button>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </nav>
            <form onSubmit={handlePostSubmit} className='form-new-camp'>
                <div className="form-div-new-post">
                    <label> Title:
                        <br />
                        <input
                            type='text'
                            placeholder='enter title'
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <label> Picture URL:
                        <br />
                        <input
                            type='text'
                            placeholder='enter picture url'
                            onChange={e => setPictureUrl(e.target.value)}
                        />
                    </label>
                    <label> Coordinates:
                        <br />
                        <input
                            type='text'
                            placeholder='enter coordinates'
                            onChange={e => setCoordinates(e.target.value)}
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
                                value='4x4'
                                onChange={e => setFourByFour(!fourByFour)}
                            />
                        </label>
                        <label> Dog Friendly:
                            <input
                                className='my-checkbox'
                                type='checkbox'
                                id='dogFriendly'
                                name='dogFriendly'
                                value='dogFriendly'
                                onChange={e => setDogFriendly(!dogFriendly)}
                            />
                        </label>
                        <label>Month Camped:
                            <select name='month' id='month-select' onChange={e => setMonth(e.target.value)}>
                                <option value='January'>January</option>
                                <option value='February'>February</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>
                                <option value='June'>June</option>
                                <option value='July'>July</option>
                                <option value='August'>August</option>
                                <option value='September'>September</option>
                                <option value='October'>October</option>
                                <option value='November'>November</option>
                                <option value='December'>December</option>
                            </select>
                        </label>
                        <label> Camp Type:
                            <br />
                            <input
                                type='text'
                                placeholder='Tent, Van, Trailer...etc...'
                                onChange={e => setCampType(e.target.value)}
                            />
                        </label>
                    </div>
                    <label>Comments:
                        <br />
                        <textarea
                            id='comments'
                            name='comments'
                            rows='5'
                            cols='45'
                            onChange={e => setComments(e.target.value)}
                        >
                        </textarea>
                    </label>
                    <button className='main-btn' type='submit'>Submit</button>
                </div>
            </form>
            <footer>
                <div className="foot-contain">
                    <div className="bottom-menu">
                        <button onClick={handleLogout} className='main-btn'>Logout</button>
                    </div>
                    <img alt='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' placeholder='logo' />
                </div>
                <div className="jess-info">
                    <p>&#169;Copyright 2022 Jessica Swenson Web Services</p>
                </div>
            </footer>
        </div>
    )
};

export default NewPostForm;