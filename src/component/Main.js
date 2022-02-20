import React from 'react';
import { sortedRides } from './allRides';
import { useState } from 'react';
import Nav from './Nav';

const Main = () => {
  const filterPast = sortedRides.filter(
    (item) => new Date(item.date) < Math.round(new Date().getTime()),
  );

  const stateNames = ['State'];
  filterPast.map((state) => {
    if (!stateNames.includes(state.state)) {
      stateNames.push(state.state);
    }
  });

  const cityNames = ['City'];
  filterPast.map((city) => {
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

  const filteredPast = filterPast.filter(
    (ride) =>
      (ride.city === city || city === 'City') &&
      (ride.state === states || states === 'State'),
  );

  const filteredNearest = sortedRides.filter(
    (ride) =>
      (ride.city === city || city === 'City') &&
      (ride.state === states || states === 'State'),
  );

  return (
    <>
      <Nav
        filteredPast={filteredPast.length}
        filteredNearest={filteredNearest.length}
      />
    </>
  );
};

export default Main;
