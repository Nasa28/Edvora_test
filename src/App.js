import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './component/mainNav';
import './App.css';
import UpcomingRides from './component/UpcomingRides';
import NearestRides from './component/NearestRides';
import PastRides from './component/PastRides';

const App = () => (
  <div className="App">
    <Router>
      <MainNav />

      <Routes>
        <Route path="/" element={<NearestRides />} />

        <Route path="/nearest-rides" element={<NearestRides />} />

        <Route path="/past-rides" element={<PastRides />} />

        <Route path="/upcoming-rides" element={<UpcomingRides />} />
      </Routes>
    </Router>
  </div>
);
export default App;
