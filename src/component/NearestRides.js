import React from 'react';
import { useState } from 'react';
import Img from '../assets/images/image.png';
import { sortedRides } from './allRides';
import { timeConverter } from '../util/dateConverter';
import Nav from './Nav';

const NearestRides = () => {
  const stateNames = ['State'];
  sortedRides.map((state) => {
    if (!stateNames.includes(state.state)) {
      stateNames.push(state.state);
    }
  });

  const cityNames = ['City'];
  sortedRides.map((city) => {
    if (!cityNames.includes(city.city)) {
      cityNames.push(city.city);
    }
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
  const filteredNearest = sortedRides.filter(
    (ride) =>
      (ride.city === city || city === 'City') &&
      (ride.state === states || states === 'State'),
  );
  return (
    <>
      <Nav filteredNearest={filteredNearest.length} />
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
      <div>
        {filteredNearest.map((ride) => {
          const { id, origin_station_code, station_path, date, distance } =
            ride;

          return (
            <div key={id}>
              <div className="img">
                <img src={Img} alt="Location" />
              </div>
              <p>Ride Id :{id}</p>
              <p>Origin Station: {origin_station_code}</p>
              <p>station path: [{station_path.toString()}]</p>
              <p>Date: {timeConverter(date)}</p>
              <p>Distance: {distance}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NearestRides;
