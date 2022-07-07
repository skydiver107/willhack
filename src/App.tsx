import React from 'react';
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
// css standards import
import './styles/normalize.css';
import './styles/fonts.css';
import './styles/utils.css';
import './styles/app.css';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<LandingPage />} />
            
          </Routes>  
        </BrowserRouter>
        
    </div>
  );
}

export default App;
