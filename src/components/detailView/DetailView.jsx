import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import './DetailView.css';


const DetailView = () => {
    const [entryObj, setEntryObj] = useState({})

    const navigate = useNavigate();
    const currentId = localStorage.getItem('user_id');

    const handleHomeBtn = () => {
        navigate(`/userHomePage/${currentId}`)
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const { id } = useParams();

    const getCampEntry = () => {
        axios
            .get('http://localhost:4004/api/getEntryDetails', {
                params: { id }
            })
            .then((res) => {
                setEntryObj(res.data)
                console.log(entryObj)
            })
            .catch(err => console.log(err))

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
            <main className='main-detail-page'>
                <DetailCard entryObj={entryObj} />
            </main>
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

export default DetailView;