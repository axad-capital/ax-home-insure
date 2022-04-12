import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import WhatIs from './pages/WhatIs';
import NavComp from './components/NavComp/NavComp'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/what-is-home-insurance' element={<WhatIs />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
