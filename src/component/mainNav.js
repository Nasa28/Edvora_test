import React from 'react';
import user from '../util/user';
import userImg from '../assets/images/userImg.png';
const MainNav = () => {
  const name = user.name;
  return (
    <>
      <div className="main">
        <p className="title">Edvora</p>
        <div className="user">
          <p>{name}</p>
          <div className="img-user">
            <img src={userImg} alt="User" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
