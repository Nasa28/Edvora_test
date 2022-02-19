import React from 'react';
import Img from '../assets/images/image.png';
import Ride from '../util/data';
const UpcomingRides = () => {
  console.log(new Date(Ride[0].date).toDateString());
  const filtered = Ride.filter((item) => new Date(item.date) > Date.now());
  console.log(filtered);
  return (
    <>
      <img src={Img} alt="Location" />
      <div>Upcoming Rides</div>
    </>
  );
};

export default UpcomingRides;

new Date(1644924365);