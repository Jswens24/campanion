import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import NoAccountHomePage from '../components/layout/NoAccountHomePage';


const RoutesContainer = () => {

    return (
        <div>
            <Routes>
                <Route path='/*' element={<NoAccountHomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    )
}

export default RoutesContainer;