import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from '../cards/index';
import Form from '../forms';
import Counter from '../hooks';
import Navbar from './Navbar';


function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/form" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;