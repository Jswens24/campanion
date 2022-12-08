import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GOOGLE;


const MyMap = () => {
    const [entries, setEntries] = useState([]);

    const mapData = entries.map()

    const navigate = useNavigate();

    const currentId = localStorage.getItem('user_id');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleHomeBtn = () => {
        navigate(`/userHomePage/${currentId}`)
    };

    const getList = () => {
        axios
            .get('http://localhost:4004/api/getCampEntries', { params: { currentId } })
            .then((res) => {
                // console.log(res.data)
                let newArr = res.data.map((entry, index) => {
                    return entry;
                })
                setEntries(newArr);
                console.log(newArr)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getList()
    }, [])


    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                <button onClick={handleHomeBtn} className='logout-btn'>Home</button>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
            </nav>
            <main>
                <div className="map">
                    {/* <GoogleMapReact>

                    </GoogleMapReact> */}
                </div>
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
}

export default MyMap