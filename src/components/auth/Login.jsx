import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4004/api/checkUsers', { username, password })
            .then((res) => {
                if (res.data) {
                    localStorage.setItem('user_id', res.data.user_id)
                    const currentId = localStorage.getItem('user_id')
                    {
                        navigate(`/userHomePage/${currentId}`)
                    }
                } else {
                    alert('USERNAME OR PASSWORD INCORRECT')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <form>
                <div className='form-div-register'>
                    <label>Username:
                        <br />
                        <input
                            type='text'
                            placeholder='enter username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <br />
                        <input
                            type='password'
                            placeholder='enter password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={handleSignIn} className='register-btn'>Sign In</button>
            </form>
            <Footer />
        </div>
    )
};

export default Login;