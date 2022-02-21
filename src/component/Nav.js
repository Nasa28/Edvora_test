import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';
import NearestRides from './NearestRides';
import UpcomingRides from './UpcomingRides';
import PastRides from './PastRides';
import { sortedRides } from './allRides';
import { filterPast } from './PastRides';
import { filterUpcoming } from './UpcomingRides';
import filterIcon from '../assets/images/Vector.png';

const Nav = ({ filteredPast, filteredNearest, filteredUpComing }) => {
  const [style1, setStyle1] = useState('heading');
  const [style2, setStyle2] = useState('heading');
  const [style3, setStyle3] = useState('heading');

  return (
    <>
      <nav className="nav">
        <div className="links">
          <div>
            <Link
              className={style1}
              to="/nearest-rides"
              onClick={() => NearestRides()}
              onClick={() => setStyle1('clickedLink')}
            >
              <h3>Nearest Rides({filteredNearest || sortedRides.length})</h3>
            </Link>
          </div>
          <div className="heading">
            <Link
              className={style2}
              to="/upcoming-rides"
              onClick={() => UpcomingRides()}
              onClick={() => setStyle2('clickedLink')}
            >
              <h3>
                Upcoming Rides({filteredUpComing || filterUpcoming.length})
              </h3>
            </Link>
          </div>

          <div>
            <Link
              className={style3}
              to="/past-rides"
              onClick={() => PastRides()}
              onClick={() => setStyle3('clickedLink')}
            >
              <h3>Past Rides({filteredPast || filterPast.length})</h3>
            </Link>
          </div>
        </div>
        <div className="filterIcon">
          <div>
            <img src={filterIcon} alt="Filter" />
          </div>

          <p>Filter</p>
        </div>
      </nav>
    </>
  );
};

export default Nav;
