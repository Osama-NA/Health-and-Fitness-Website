import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
        </Routes>
  )
}

export default Pages;