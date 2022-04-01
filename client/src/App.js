import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import WhatIs from './pages/WhatIs';
import NavComp from './components/NavComp/NavComp'

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/what-is-home-insurance' element={<WhatIs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
