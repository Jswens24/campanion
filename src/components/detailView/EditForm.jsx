import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditForm.css';

const EditForm = () => {
    const [campObj, setCampObj] = useState({});
    const [newObj, setNewObj] = useState({});
    const [loading, setLoading] = useState(false)

    const titleRef = useRef();
    const pictureRef = useRef();
    const coordinatesRef = useRef();
    const fourByFourRef = useRef();
    const dogFriendlyRef = useRef();
    const monthRef = useRef();
    const commentsRef = useRef();
    const campTypeRef = useRef();

    const prevMonth = campObj.camp_entry_month;



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

    const handleClick = () => {
        setNewObj({
            camp_entry_title: titleRef.current.value,
            camp_entry_url: pictureRef.current.value,
            camp_entry_coordinates: coordinatesRef.current.value,
            camp_entry_four_wheel: fourByFourRef.current.value,
            camp_entry_dog_friendly: dogFriendlyRef.current.value,
            camp_entry_month: monthRef.current.value,
            camp_entry_comments: commentsRef.current.value,
            camp_entry_camp_type: campTypeRef.current.value,
            camp_entry_id: campObj.camp_entry_id
        })
    }

    const handleEditPost = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:4004/api/editEntryDetails/${campObj.camp_entry_id}`, newObj)
            .then((res) => {
                console.log(res.data);
                alert('You have successfully edited an entry');
                navigate(`/userHomePage/${currentId}`);
            })
            .catch(err => console.log(err))
        // console.log({ newObj })
    };




    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 100)
        getCampEntry();
    }, [])

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
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
                                    defaultValue={campObj.camp_entry_title}
                                    ref={titleRef}
                                />
                            </label>
                            <label> Picture URL:
                                <br />
                                <input
                                    type='text'
                                    defaultValue={campObj.camp_entry_url}
                                    ref={pictureRef}
                                />
                            </label>
                            <label> Coordinates:
                                <br />
                                <input
                                    type='text'
                                    defaultValue={campObj.camp_entry_coordinates}
                                    ref={coordinatesRef}
                                />
                            </label>
                            <p className='p-in-form'>Select all the apply:</p>
                            <div className="select-options">
                                <label> 4x4 Needed:
                                    <select
                                        ref={fourByFourRef}
                                    >
                                        <option value='true' selected={campObj.camp_entry_four_wheel}>True</option>
                                        <option value='false' selected={!campObj.camp_entry_four_wheel}>False</option>
                                    </select>
                                </label>
                                <label> Dog Friendly:
                                    <select
                                        ref={dogFriendlyRef}
                                    >
                                        <option value='true' selected={campObj.camp_entry_dog_friendly}>True</option>
                                        <option value='false' selected={!campObj.camp_entry_dog_friendly}>False</option>
                                    </select>
                                </label>
                                <label>Month Camped:
                                    <select
                                        ref={monthRef}
                                    >
                                        <option value='January' selected={prevMonth === 'January'}>January</option>
                                        <option value='February' selected={prevMonth === 'February'}>February</option>
                                        <option value='March' selected={prevMonth === 'March'}>March</option>
                                        <option value='April' selected={prevMonth === 'April'}>April</option>
                                        <option value='May' selected={prevMonth === 'May'}>May</option>
                                        <option value='June' selected={prevMonth === 'June'}>June</option>
                                        <option value='July' selected={prevMonth === 'July'}>July</option>
                                        <option value='August' selected={prevMonth === 'August'}>August</option>
                                        <option value='September' selected={prevMonth === 'September'}>September</option>
                                        <option value='October' selected={prevMonth === 'October'}>October</option>
                                        <option value='November' selected={prevMonth === 'November'}>November</option>
                                        <option value='December' selected={prevMonth === 'December'}>December</option>
                                    </select>
                                </label>
                                <label> Camp Type:
                                    <br />
                                    <input
                                        type='text'
                                        defaultValue={campObj.camp_entry_camp_type}
                                        ref={campTypeRef}
                                    />
                                </label>
                                <label>Comments:
                                    <br />
                                    <textarea
                                        rows='5'
                                        cols='45'
                                        defaultValue={campObj.camp_entry_comments}
                                        ref={commentsRef}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            <button onClick={handleClick} className='main-btn' type='submit'>Submit</button>
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
                </div>
            )}

        </div >
    )
};

export default EditForm;