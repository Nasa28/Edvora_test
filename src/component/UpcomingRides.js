import React from 'react';
import Img from '../assets/images/image.png';
import { sortedRides } from './allRides';
import { timeConverter } from '../util/dateConverter';

export const filterUpcoming = sortedRides.filter(
  (item) => new Date(item.date) > Math.round(new Date().getTime()),
);
const UpcomingRides = () => {
  return (
    <>
      {filterUpcoming ? (
        <div>There are no UpcomingRides</div>
      ) : (
        <div>
          {filterUpcoming.map((ride) => {
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
      )}
    </>
  );
};

export default UpcomingRides;
