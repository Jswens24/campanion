import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditForm.css';

const EditForm = () => {
    const [campObj, setCampObj] = useState({});
    const [title, setTitle] = useState(campObj.camp_entry_title)
    const [pictureUrl, setPictureUrl] = useState(campObj.camp_entry_url);
    const [coordinates, setCoordinates] = useState(campObj.camp_entry_coordinates);
    const [fourByFour, setFourByFour] = useState('');
    const [dogFriendly, setDogFriendly] = useState('');
    const [month, setMonth] = useState('');
    const [comments, setComments] = useState('');
    const [campType, setCampType] = useState('');
    const [newArr, setNewArr] = useState([]);


    const { id } = useParams();
    const navigate = useNavigate();
    const currentId = localStorage.getItem('user_id');

    const handleHomeBtn = () => {
        navigate(`/userHomePage/${currentId}`)
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const getCampEntry = () => {
        axios
            .get('http://localhost:4004/api/getEntryDetails', {
                params: { id }
            })
            .then((res) => {
                setCampObj(res.data)
            })
            .catch(err => console.log(err))

    };

    const handleEditPost = (e) => {
        e.preventDefault();

        if (title === !campObj.camp_entry_title) {
            let newTitle = title;
            setNewArr([...newArr, newTitle]);
        } else if (pictureUrl === !campObj.camp_entry_url) {
            let newUrl = pictureUrl;
            setNewArr([...newArr, newUrl]);
        } else if (coordinates === !campObj.camp_entry_coordinates) {
            let newCoordinates = coordinates;
            setNewArr([...newArr, newCoordinates]);
        }
        if (fourByFour.length === !fourByFour.length) {
            let newFourWheel = fourByFour;
            setNewArr([...newArr, newFourWheel]);
        }
        if (dogFriendly.length === !dogFriendly.length) {
            let newDogFriendly = dogFriendly;
            setNewArr([...newArr, newDogFriendly]);
        }
        if (month.length === !month.length) {
            let newMonth = month;
            setNewArr([...newArr, newMonth]);
        }
        if (comments.length === !comments.length) {
            let newComments = comments;
            setNewArr([...newArr, newComments]);
        }
        if (campType.length === !campType.length) {
            let newCampType = campType;
            setNewArr([...newArr, newCampType]);
        }

        console.log({ newArr })

    };




    useEffect(() => {
        getCampEntry();
    }, [])

    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                <button onClick={handleHomeBtn} className='logout-btn'>Home</button>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </nav>
            <form onSubmit={handleEditPost} className='form-edit-camp'>
                <div className="form-edit-camp-div" >
                    <label> Title:
                        <br />
                        <input
                            type='text'
                            placeholder={campObj.camp_entry_title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <label> Picture URL:
                        <br />
                        <input
                            type='text'
                            placeholder={campObj.camp_entry_url}
                            onChange={e => setPictureUrl(e.target.value)}
                        />
                    </label>
                    <label> Coordinates:
                        <br />
                        <input
                            type='text'
                            placeholder={campObj.camp_entry_coordinates}
                            onChange={e => setCoordinates(e.target.value)}
                        />
                    </label>
                    <p className='p-in-form'>Select all the apply:</p>
                    <div className="select-options">
                        <p> 4x4 Needed:
                            <br />
                            <button className='main-btn' onClick={e => setFourByFour(true)}>Yes</button>
                            <button className='main-btn' onClick={e => setFourByFour(false)}>No</button>
                        </p>
                        <p className='p-edit'> Dog Friendly:
                            <br />
                            <button className='main-btn' onClick={e => setDogFriendly(true)}>Yes</button>
                            <button className='main-btn' onClick={e => setDogFriendly(false)}>No</button>
                        </p>
                        <label>Month Camped:
                            <select
                                placeholder={campObj.camp_entry_month}
                                onChange={e => setMonth(e.target.value)}>
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
                                placeholder={campObj.camp_entry_camp_type}
                                onChange={e => setCampType(e.target.value)}
                            />
                        </label>
                        <label>Comments:
                            <br />
                            <textarea
                                rows='5'
                                cols='45'
                                placeholder={campObj.camp_entry_comments}
                                onChange={e => setComments(e.target.value)}
                            >
                            </textarea>
                        </label>
                        <button className='main-btn' type='submit'>Submit</button>
                    </div>
                </div>
            </form >
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
        </div >
    )
};

export default EditForm;