import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditForm.css';

const EditForm = () => {
    const [campObj, setCampObj] = useState({});
    const [title, setTitle] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [fourByFour, setFourByFour] = useState(false);
    const [dogFriendly, setDogFriendly] = useState(false);
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

    const handleEditPost = () => {
        if (title === !campObj.camp_entry_title) {
            const newTitle = title;
            setNewArr([...newArr, newTitle]);
        }
        if (pictureUrl === !campObj.camp_entry_url) {
            const newUrl = pictureUrl;
            setNewArr([...newArr, newUrl]);
        }
        if (coordinates === !campObj.camp_entry_coordinates) {
            const newCoordinates = coordinates;
            setNewArr([...newArr, newCoordinates]);
        }
        if (fourByFour === !campObj.camp_entry_four_wheel) {
            const newFourWheel = fourByFour;
            setNewArr([...newArr, newFourWheel]);
        }
        if (dogFriendly === !campObj.camp_entry_dog_friendly) {
            const newDogFriendly = dogFriendly;
            setNewArr([...newArr, newDogFriendly]);
        }
        if (month === !campObj.camp_entry_month) {
            const newMonth = month;
            setNewArr([...newArr, newMonth]);
        }
        if (comments === !campObj.camp_entry_comments) {
            const newComments = comments;
            setNewArr([...newArr, newComments]);
        }
        if (campType === !campObj.camp_entry_camp_type) {
            const newCampType = campType;
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
            <form onSubmit={handleEditPost} className='form-new-camp form-edit-camp'>
                <div className="form-div-new-post" >
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
                        <label> 4x4 Needed:
                            <select
                                placeholder={campObj.camp_entry_four_wheel}
                                onChange={e => setFourByFour(e.target.value)}
                            >
                                <option value=''>True</option>
                                <option value='false'>False</option>
                            </select>
                        </label>
                        <label> Dog Friendly:
                            <select
                                placeholder={campObj.camp_entry_dog_friendly}
                                onChange={e => setDogFriendly(e.target.value)}
                            >
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select>
                        </label>
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
                                value={campObj.camp_entry_camp_type}
                                onChange={e => setCampType(e.target.value)}
                            />
                        </label>
                        <label>Comments:
                            <br />
                            <textarea
                                rows='5'
                                cols='45'
                                value={campObj.camp_entry_comments}
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