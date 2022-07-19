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
import NativeQuote from './pages/NativeQuotePage/NativeQuote';
import ThankYouNative from './pages/Thank/ThankYouNative';

function App() {
  return (
    <div className="App">
      <div style={{ opacity: '0', position: 'absolute', left: '50%' }}>
        <a href="https://www.a1jkghtrk.com/28KL6/3F292Q1/?source_id={affiliate_id}&sub1={transaction_id}">offers!</a>
      </div>
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/get-quote' element={<QuotePage />} />
          <Route exact path='/get-quote/nat' element={<NativeQuote />} />
          <Route exact path='/thank-you' element={<ThankYou />} />
          <Route exact path='/thank-you-nat' element={<ThankYouNative />} />
          <Route exact path='/img-src-host-21-21-21-21-1234567890' element={<ImageSrcHosting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
