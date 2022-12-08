import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import DetailView from '../components/detailView/DetailView';
import EditForm from '../components/detailView/EditForm';
import NoAccountHomePage from '../components/layout/NoAccountHomePage';
import UserHomePage from '../components/layout/UserHomePage';
import MyMap from '../components/Maps/MyMap';
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
                <Route path='/detailView/:id' element={<DetailView />} />
                <Route path='/editForm/:id' element={<EditForm />} />
                <Route path='/myMap/' element={<MyMap />} />
            </Routes>
        </div>
    )
}

export default RoutesContainer;