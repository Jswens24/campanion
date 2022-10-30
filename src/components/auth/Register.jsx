import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (name.length === 0 || username.length === 0 || password.length === 0) {
            alert('INVALID NAME, USERNAME, OR PASSWORD')
        } else {
            axios
                .post('http://localhost:4004/api/user', { name, username, password })
                .then((res) => {
                    console.log('sent to database')
                    console.log('res.data')
                    if (res.data) {
                        localStorage.setItem('user_id', res.data.user_id);
                        const currentId = localStorage.getItem('user_id');
                        {
                            navigate(`/userHomePage/${currentId}`)
                        }
                    } else {
                        alert('BACKEND: INVALID NAME, USERNAME, OR PASSWORD')
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Header />
            <form className='main-form-div'>
                <div className='form-div'>
                    <label className='name-lab'>Name:
                        <br />
                        <input
                            type='text'
                            placeholder='enter your name'
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>Username:
                        <br />
                        <input
                            type='text'
                            placeholder='enter a username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <br />
                        <input
                            type='password'
                            placeholder='enter a password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button onClick={handleRegister} className='register-btn'>Register</button>
                </div>
            </form>
            <Footer />
        </div>
    )
};

export default Register;