import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListDisplay from '../userPosts/ListDisplay';
import './UserHomePage.css'

const UserHomePage = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const currentId = localStorage.getItem('user_id');

    const getUserName = () => {
        setLoading(true)
        axios
            .get('http://localhost:4004/api/getUserName', { params: { currentId } })
            .then((res) => {
                setLoading(false)
                setName(res.data.user_name)
            })
            .catch(err => console.log(err))
    };


    useEffect(() => {
        getUserName();
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
                        <h2>Welcome  {name}!</h2>
                        <button onClick={handleLogout} className='logout-btn'>Logout</button>
                    </nav>
                    <main className='main-userpage'>
                        <div className="list-container">
                            <div className='list-item-container'>
                                <ListDisplay />
                            </div>
                        </div>
                        <div className="side-btn-contain">
                            {/* <Link to='/myMap'>
                                <button className='go-to-new-post'>My Map</button>
                            </Link> */}
                            <Link to='/newPost'>
                                <button className='go-to-new-post'>Add New Adventure</button>
                            </Link>
                        </div>
                    </main>
                    <div>
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
                </div>
            )}


        </div>
    )
};

export default UserHomePage;