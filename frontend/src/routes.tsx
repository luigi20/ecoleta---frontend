import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePoints from './pages/Create_Points';
const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<CreatePoints />} path='/create-point' />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;