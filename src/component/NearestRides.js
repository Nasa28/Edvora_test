import React from 'react';
import Img from '../assets/images/image.png';
import Ride from '../util/data';
import user from '../util/user';
import { timeConverter } from '../util/dateConverter';
const NearestRides = () => {
  const station = user.station_code;

  const Rides = Ride.map((item) => {
    const closest = item.station_path.reduce(function (prev, curr) {
      return Math.abs(curr - station) < Math.abs(prev - station) ? curr : prev;
    });
    item.distance = Math.abs(closest) - Math.abs(station);
    return item;
  });

  const sortedRides = Rides.sort((a, b) => a.distance - b.distance);

  return (
    <>
      <div>
        {sortedRides.map((ride) => {
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
