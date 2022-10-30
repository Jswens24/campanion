import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <footer>
                <div className="foot-contain">
                    <div className="bottom-menu">
                        <Link to='/'>
                            <button className='btm-btn'>Home</button>
                        </Link>
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

export default Footer;