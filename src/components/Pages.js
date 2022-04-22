import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

// Returns a page component based on requested path
const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
        </Routes>
  )
}

export default Pages;