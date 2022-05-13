import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavComp from './components/NavComp/NavComp'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import QuotePage from './pages/QuotePage/QuotePage';
import ThankYou from './pages/Thank/ThankYou';
import ImageSrcHosting from './ImageSrcHosting/ImageSrcHosting';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/get-quote' element={<QuotePage />} />
          <Route exact path='/thank-you' element={<ThankYou />} />
          <Route exact path='/img-src-host-21-21-21-21-1234567890' element={<ImageSrcHosting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
