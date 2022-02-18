import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './component/mainNav';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <MainNav />
        <Routes>{/* <Route exact path="/" element={<MealList />} /> */}</Routes>
      </Router>
    </div>
  );
};
export default App;
