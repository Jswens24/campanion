import React from 'react';
import { Link } from 'react-router-dom';
import './NoAccountHomePage.css';

const NoAccountHomePage = () => {


    return (
        <div>
            <main className='main-no-acct'>
                <div className="logo-btns">
                    <div className="bkg-color">
                        <img className='logo-home-pg' alt='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' placeholder='logo' />
                        <div className="btn-container">
                            <Link to='/login'>
                                <button className='main-btn'>Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className='main-btn'>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="foot-contain">
                    <div className="bottom-menu">
                        <Link to='/login'>
                            <button className='btm-btn'>Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className='btm-btn'>Register</button>
                        </Link>
                    </div>
                    <img alt='mtns' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' />
                </div>
                <div className="jess-info">
                    <p>&#169;Copyright 2022 Jessica Swenson Web Services</p>
                </div>
            </footer>
        </div>
    )
}

export default NoAccountHomePage
