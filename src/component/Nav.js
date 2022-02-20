import React from 'react';
import { Link } from 'react-router-dom';
import NearestRides from './NearestRides';
import UpcomingRides from './UpcomingRides';
import PastRides from './PastRides';



const Nav = ({ filteredPast, filteredNearest, filteredUpComing }) => {
  return (
    <>
      <nav data-testid="nav" className="nav">
        <div>
          <Link
            className="heading"
            to="/nearest-rides"
            onClick={() => NearestRides()}
          >
            <h3>Nearest Rides({filteredNearest})</h3>
          </Link>
        </div>
        <header>
          <Link
            className="heading"
            to="/upcoming-rides"
            onClick={() => UpcomingRides()}
          >
            <h3>Upcoming Rides({filteredUpComing})</h3>
          </Link>
        </header>
        <div>
          <Link
            className="heading"
            to="/past-rides"
            onClick={() => PastRides()}
          >
            <h3>Past Rides({filteredPast})</h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
