import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './component/mainNav';
import Nav from './component/Nav';
import './App.css';
import UpcomingRides from './component/UpcomingRides';
import NearestRides from './component/NearestRides';
import PastRides from './component/PastRides';

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Nav />
        <Routes>{<Route exact path="/" element={<NearestRides />} />}</Routes>
        <Routes>
          {<Route exact path="/upcoming-rides" element={<UpcomingRides />} />}
        </Routes>
        <Routes>
          {<Route exact path="/past-rides" element={<PastRides />} />}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
