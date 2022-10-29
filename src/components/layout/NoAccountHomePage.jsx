import React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import './NoAccountHomePage.css'

const NoAccountHomePage = () => {
    const [about, setAbout] = useState(true);

    const aboutHandler = () => {
        setAbout(!about)
    }

    return (
        <main className='background'>
            <h1>app here</h1>
            {/* <img className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' placeholder='logo' /> */}
            <div className='high-level-btn-contain'>
                <div className='btn-contain'>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                    <button onClick={aboutHandler}>About</button>
                    {!about &&
                        <p>Welcome to Campanion!  Here you can keep and organize details from all your many adventures! </p>
                    }
                </div>
            </div>
        </main>
    )
}

export default NoAccountHomePage