import React from 'react';
import Img from '../assets/images/image.png'
const NearestRides = () => {
  return (
    <>
      <div className="img">
        <img src={Img} alt="Location" />
      </div>
      <div>Nearest Rides</div>
    </>
  );
};

export default NearestRides;
