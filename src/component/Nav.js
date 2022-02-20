import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css'
import NearestRides from './NearestRides';
import UpcomingRides from './UpcomingRides';
import PastRides from './PastRides';
import { sortedRides } from './allRides';
import { filterPast } from './PastRides';
import { filterUpcoming } from './UpcomingRides';

const Nav = ({ filteredPast, filteredNearest, filteredUpComing }) => {
  return (
    <>
      <nav className="nav">
        <div>
          <Link
            className="heading"
            to="/nearest-rides"
            onClick={() => NearestRides()}
          >
            <h3>Nearest Rides({filteredNearest || sortedRides.length})</h3>
          </Link>
        </div>
        <header>
          <Link
            className="heading"
            to="/upcoming-rides"
            onClick={() => UpcomingRides()}
          >
            <h3>Upcoming Rides({filteredUpComing || filterUpcoming.length})</h3>
          </Link>
        </header>
        <div>
          <Link
            className="heading"
            to="/past-rides"
            onClick={() => PastRides()}
          >
            <h3>Past Rides({filteredPast || filterPast.length})</h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
