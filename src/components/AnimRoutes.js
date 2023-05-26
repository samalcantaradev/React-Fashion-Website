import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import {Routes, Route, useLocation} from 'react-router-dom'
import Clothing from '../pages/Clothing';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/clothing'element={<Clothing/>}/>
    <Route path='/contact'element={<Contact/>}/>
  </Routes>
};

export default AnimRoutes;
