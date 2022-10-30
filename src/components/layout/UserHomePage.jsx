import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserHomePage.css'

const UserHomePage = () => {
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const currentId = localStorage.getItem('user_id');

    const getUserName = () => {
        axios
            .get('http://localhost:4004/api/getUserName', { params: { currentId } })
            .then((res) => {
                setName(res.data.user_name)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getUserName();
    }, [])



    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </nav>
            <main className='main-userpage'>
                <h2>Welcome  {name}!</h2>
            </main>
        </div>
    )
};

export default UserHomePage;