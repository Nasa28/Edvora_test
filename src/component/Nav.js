import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NearestRides from './NearestRides';
import UpcomingRides, { filterUpcoming } from './UpcomingRides';
import PastRides, { filterPast } from './PastRides';
import { sortedRides } from './allRides';
import filterIcon from '../assets/images/Vector.png';

const Nav = ({ filteredPast, filteredNearest, filteredUpComing }) => {
  const [style1, setStyle1] = useState('heading');
  const [style2, setStyle2] = useState('heading');
  const [style3, setStyle3] = useState('heading');

  const styles1 = () => setStyle1('clickedLink');

  const styles2 = () => setStyle2('clickedLink');

  const styles3 = () => setStyle3('clickedLink');
  return (
    <>
      <nav className="nav">
        <div className="links">
          <div>
            <Link
              className={style1}
              to="/nearest-rides"
              onClick={() => {
                NearestRides();
                styles1();
              }}
            >
              <h3>
                Nearest Rides(
                {filteredNearest || sortedRides.length}
                )
              </h3>
            </Link>
          </div>
          <div className="heading">
            <Link
              className={style2}
              to="/upcoming-rides"
              onClick={() => {
                UpcomingRides();
                styles2();
              }}
            >
              <h3>
                Upcoming Rides(
                {filteredUpComing || filterUpcoming.length}
                )
              </h3>
            </Link>
          </div>

          <div>
            <Link
              className={style3}
              to="/past-rides"
              onClick={() => {
                PastRides();
                styles3();
              }}
            >
              <h3>
                Past Rides(
                {filteredPast || filterPast.length}
                )
              </h3>
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

Nav.propTypes = {
  filteredPast: PropTypes.string.isRequired,
  filteredUpComing: PropTypes.string.isRequired,
  filteredNearest: PropTypes.string.isRequired,
};

export default Nav;
