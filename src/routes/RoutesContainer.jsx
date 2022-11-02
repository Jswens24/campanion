import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import NoAccountHomePage from '../components/layout/NoAccountHomePage';
import UserHomePage from '../components/layout/UserHomePage';
import NewPostForm from '../components/userPosts/NewPostForm';


const RoutesContainer = () => {

    return (
        <div>
            <Routes>
                <Route path='/*' element={<NoAccountHomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/userHomePage/:id' element={<UserHomePage />} />
                <Route path='/newPost' element={<NewPostForm />} />
            </Routes>
        </div>
    )
}

export default RoutesContainer;