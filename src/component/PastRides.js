import React from 'react';
import Img from '../assets/images/image.png';
import { sortedRides } from './allRides';
import { useState } from 'react';
import { timeConverter } from '../util/dateConverter';
import Nav from './Nav';
export const filterPast = sortedRides.filter(
  (item) => new Date(item.date) < Math.round(new Date().getTime()),
);
const PastRide = () => {
  const filterPast = sortedRides.filter(
    (item) => new Date(item.date) < Math.round(new Date().getTime()),
  );

  const stateNames = ['State'];
  filterPast.map((state) => {
    if (!stateNames.includes(state.state)) {
      stateNames.push(state.state);
    }
    return stateNames;
  });

  const cityNames = ['City'];
  filterPast.map((city) => {
    if (!cityNames.includes(city.city)) {
      cityNames.push(city.city);
    }
    return cityNames;
  });

  const [states, setStates] = useState('State');
  const [city, setCity] = useState('City');

  const handleFilterChange = (e) => {
    e.preventDefault();

    if (stateNames.includes(e.target.value)) {
      setStates(e.target.value);
    } else {
      setCity(e.target.value);
    }
  };

  const filteredPast = filterPast.filter(
    (ride) =>
      (ride.city === city || city === 'City') &&
      (ride.state === states || states === 'State'),
  );

  return (
    <>
      <Nav filteredPast={filteredPast.length} />
      <select className="select" onChange={handleFilterChange} name="filter">
        {stateNames.map((filter) => (
          <option name="category" value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>

      <select className="select" onChange={handleFilterChange} name="filter">
        {cityNames.map((filter) => (
          <option name="category" value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
      {filteredPast.length === 0 ? (
        <div>There are no Past Rides</div>
      ) : (
        <div>
          {filteredPast.map((ride) => {
            const {
              id,
              origin_station_code,
              station_path,
              date,
              distance,
              state,
              city,
            } = ride;

            return (
              <div key={id} className="data-body">
                <div className="img">
                  <img src={Img} alt="Location" />
                </div>
                <div className="info">
                  <div className="details">
                    <p className="para">
                      Ride Id : <span className="span">{id}</span>
                    </p>
                    <p className="para">
                      Origin Station:
                      <span className="span">{origin_station_code}</span>
                    </p>
                    <p className="para">
                      station path:
                      <span className="span"> [{station_path.toString()}]</span>
                    </p>
                    <p className="para">
                      Date: <span className="span">{timeConverter(date)}</span>
                    </p>
                    <p className="para">
                      Distance: <span className="span"> {distance}</span>
                    </p>
                  </div>

                  <div className="location">
                    <p>{state}</p>
                    <p>{city}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PastRide;
