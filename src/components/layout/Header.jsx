import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            <nav>
                <img alt='logo' className='logo' src='https://drive.google.com/uc?export=view&id=1skBzqBM2HTYZx0h5TdGP5hNIcCzEp8l1' placeholder='logo' />
                <ul>
                    <Link to='/'>
                        <button className='main-btn'>Home</button>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};

export default Header;